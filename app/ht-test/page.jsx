'use client';

import { useState } from 'react';
import { Card } from '../../components/card';

export default function HTTestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }

        setSubmitting(false);
    };

    if (submitted) {
        return (
            <>
                <h1 className="mb-8">HT Test</h1>
                <Card className="text-center py-12">
                    <span className="text-6xl mb-4 block">✅</span>
                    <h2 className="text-primary mb-4">Deine Anfrage wurde erfolgreich gesendet.</h2>
                    <p className="text-neutral-300 mb-6">
                        Vielen Dank! Wir werden deine High Tier Infos prüfen und uns bei dir melden.
                    </p>
                </Card>
            </>
        );
    }

    return (
        <>
            <h1 className="mb-4">HT Test</h1>
            <p className="text-lg text-neutral-300 mb-4">
                High Tier Test - Zeige uns deinen High Tier!
            </p>
            <p className="text-neutral-400 mb-8">
                Dies ist kein Admin Test, sondern ein High Tier Test, damit Spieler ihren High Tier zeigen können.
            </p>

            <Card>
                <form
                    name="ht-test"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="ht-test" />
                    <input type="hidden" name="subject" value="Neuer HT Test - Star Realm" />
                    <p className="hidden">
                        <label>
                            Nicht ausfüllen: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="mb-6">
                        <label htmlFor="ingame-name" className="block mb-2 font-medium">
                            Ingame Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="ingame-name"
                            name="ingame-name"
                            required
                            placeholder="Dein Ingame Name"
                            className="input w-full"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="high-tier" className="block mb-2 font-medium">
                            High Tier <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="high-tier"
                            name="high-tier"
                            required
                            placeholder="z.B. Marlow in Sword VP LT1"
                            className="input w-full"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="description" className="block mb-2 font-medium">
                            Kurzbeschreibung / Erklärung <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={4}
                            placeholder="Erkläre deinen High Tier..."
                            className="input w-full resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg w-full"
                        disabled={submitting}
                    >
                        {submitting ? 'Wird gesendet...' : 'Absenden'}
                    </button>
                </form>
            </Card>
        </>
    );
}

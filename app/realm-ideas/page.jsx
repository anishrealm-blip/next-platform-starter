'use client';

import { useState } from 'react';
import { Card } from '../../components/card';

export default function RealmIdeasPage() {
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
                <h1 className="mb-8">Realm-Ideen</h1>
                <Card className="text-center py-12">
                    <span className="text-6xl mb-4 block">🎉</span>
                    <h2 className="text-primary mb-4">Vielen Dank!</h2>
                    <p className="text-neutral-300 mb-6">
                        Deine Idee wurde erfolgreich eingereicht. Wir werden sie prüfen!
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="btn"
                    >
                        Weitere Idee einreichen
                    </button>
                </Card>
            </>
        );
    }

    return (
        <>
            <h1 className="mb-4">Realm-Ideen</h1>
            <p className="text-lg text-neutral-300 mb-8">
                Hast du eine tolle Idee für Star Realm? Teile sie mit uns! Alle Ideen werden nur vom Team gesehen.
            </p>

            <Card>
                <form
                    name="realm-ideas"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="realm-ideas" />
                    <p className="hidden">
                        <label>
                            Nicht ausfüllen: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Name <span className="text-neutral-400">(optional)</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Dein Name oder Gamertag"
                            className="input w-full"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="idea" className="block mb-2 font-medium">
                            Deine Idee <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="idea"
                            name="idea"
                            required
                            rows={6}
                            placeholder="Beschreibe deine Idee für Star Realm..."
                            className="input w-full resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg w-full"
                        disabled={submitting}
                    >
                        {submitting ? 'Wird gesendet...' : 'Idee einreichen'}
                    </button>
                </form>
            </Card>
        </>
    );
}

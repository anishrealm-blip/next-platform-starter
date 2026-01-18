'use client';

import { useState } from 'react';
import { Card } from '../../components/card';

export default function ModApplicationPage() {
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
                <h1 className="mb-8">MOD Bewerbung</h1>
                <Card className="text-center py-12">
                    <span className="text-6xl mb-4 block">✅</span>
                    <h2 className="text-primary mb-4">Deine Anfrage wurde erfolgreich gesendet.</h2>
                    <p className="text-neutral-300 mb-6">
                        Vielen Dank für deine Bewerbung! Wir werden sie prüfen und uns bei dir melden.
                        Bitte hab etwas Geduld, das kann einige Tage dauern.
                    </p>
                </Card>
            </>
        );
    }

    return (
        <>
            <h1 className="mb-4">MOD Bewerbung</h1>
            <p className="text-lg text-neutral-300 mb-8">
                Du möchtest Teil des Star Realm Teams werden? Fülle das Formular aus und zeige uns, warum du der richtige Kandidat bist!
            </p>

            <Card>
                <form
                    name="mod-application"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="mod-application" />
                    <input type="hidden" name="subject" value="Neue MOD Bewerbung - Star Realm" />
                    <p className="hidden">
                        <label>
                            Nicht ausfüllen: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="mb-6">
                        <label htmlFor="ingame-name" className="block mb-2 font-medium">
                            Name / Ingame Name <span className="text-red-400">*</span>
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
                        <label htmlFor="age" className="block mb-2 font-medium">
                            Alter <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            min="10"
                            max="99"
                            placeholder="Dein Alter"
                            className="input w-full"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="why-mod" className="block mb-2 font-medium">
                            Warum willst du MOD werden? <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="why-mod"
                            name="why-mod"
                            required
                            rows={4}
                            placeholder="Erkläre uns, warum du MOD werden möchtest..."
                            className="input w-full resize-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="experience" className="block mb-2 font-medium">
                            Welche Erfahrung hast du als MOD? <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="experience"
                            name="experience"
                            required
                            rows={4}
                            placeholder="Beschreibe deine bisherige Erfahrung..."
                            className="input w-full resize-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="team-experience" className="block mb-2 font-medium">
                            Hast du schon mal ein Team gehabt? <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            id="team-experience"
                            name="team-experience"
                            required
                            rows={3}
                            placeholder="Warst du schon mal in einem Team? Erzähle uns davon..."
                            className="input w-full resize-none"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="online-time" className="block mb-2 font-medium">
                            Wie oft bist du online? <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="online-time"
                            name="online-time"
                            required
                            placeholder="z.B. Täglich 2-3 Stunden, nur Wochenende, etc."
                            className="input w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg w-full"
                        disabled={submitting}
                    >
                        {submitting ? 'Wird gesendet...' : 'Bewerbung absenden'}
                    </button>
                </form>
            </Card>

            <Card className="mt-6 bg-blue-900/30 border border-blue-500/50">
                <h3 className="text-blue-300 mb-3">Hinweis</h3>
                <p className="text-neutral-200 text-sm">
                    Alle Bewerbungen werden sorgfältig geprüft. Bitte sei ehrlich in deinen Antworten.
                    Wir melden uns per Discord oder im Spiel bei dir. Viel Erfolg!
                </p>
            </Card>
        </>
    );
}

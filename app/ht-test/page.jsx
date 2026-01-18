'use client';

import { useState } from 'react';
import { Card } from '../../components/card';

const testQuestions = [
    {
        question: 'Was passiert, wenn jemand cheatet?',
        options: [
            'Nichts',
            'Warnung oder Ban',
            'Belohnung',
            'Weiß nicht'
        ],
        correct: 1
    },
    {
        question: 'Ist Griefing erlaubt?',
        options: [
            'Ja',
            'Nein',
            'Manchmal',
            'Nur auf PvP Realms'
        ],
        correct: 1
    },
    {
        question: 'Was bedeutet "Respektiere andere Spieler"?',
        options: [
            'Nur Freunde respektieren',
            'Alle fair und freundlich behandeln',
            'Nur das Team respektieren',
            'Niemanden respektieren'
        ],
        correct: 1
    },
    {
        question: 'Was sollst du tun, wenn du einen Bug findest?',
        options: [
            'Ausnutzen',
            'Ignorieren',
            'Dem Team melden',
            'Allen erzählen'
        ],
        correct: 2
    },
    {
        question: 'Darf man Werbung machen?',
        options: [
            'Ja, immer',
            'Nein, nie',
            'Nur mit Erlaubnis',
            'Nur für eigene Server'
        ],
        correct: 2
    }
];

export default function HTTestPage() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [score, setScore] = useState(0);
    const [playerName, setPlayerName] = useState('');

    const handleAnswer = (questionIndex, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionIndex]: optionIndex
        }));
    };

    const calculateScore = () => {
        let correct = 0;
        testQuestions.forEach((q, index) => {
            if (answers[index] === q.correct) {
                correct++;
            }
        });
        return correct;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const finalScore = calculateScore();
        setScore(finalScore);

        const formData = new FormData();
        formData.append('form-name', 'ht-test');
        formData.append('name', playerName);
        formData.append('score', `${finalScore}/${testQuestions.length}`);
        formData.append('percentage', `${Math.round((finalScore / testQuestions.length) * 100)}%`);

        testQuestions.forEach((q, index) => {
            const selectedOption = answers[index] !== undefined ? q.options[answers[index]] : 'Nicht beantwortet';
            const correctOption = q.options[q.correct];
            const isCorrect = answers[index] === q.correct;
            formData.append(`frage_${index + 1}`, `${q.question} - Antwort: ${selectedOption} (${isCorrect ? 'Richtig' : 'Falsch - Korrekt: ' + correctOption})`);
        });

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

    const allAnswered = Object.keys(answers).length === testQuestions.length && playerName.trim() !== '';

    if (submitted) {
        const percentage = Math.round((score / testQuestions.length) * 100);
        const passed = percentage >= 80;

        return (
            <>
                <h1 className="mb-8">HT Test Ergebnis</h1>
                <Card className="text-center py-12">
                    <span className="text-6xl mb-4 block">{passed ? '🎉' : '📚'}</span>
                    <h2 className={`mb-4 ${passed ? 'text-green-400' : 'text-yellow-400'}`}>
                        {passed ? 'Bestanden!' : 'Nicht bestanden'}
                    </h2>
                    <p className="text-4xl font-bold text-primary mb-4">
                        {score}/{testQuestions.length}
                    </p>
                    <p className="text-neutral-300 mb-6">
                        Du hast {percentage}% der Fragen richtig beantwortet.
                        {passed
                            ? ' Herzlichen Glückwunsch! Dein Ergebnis wurde an das Team gesendet.'
                            : ' Du brauchst mindestens 80% um zu bestehen. Lerne die Regeln und versuche es erneut!'}
                    </p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setAnswers({});
                            setPlayerName('');
                        }}
                        className="btn"
                    >
                        Test wiederholen
                    </button>
                </Card>
            </>
        );
    }

    return (
        <>
            <h1 className="mb-4">HT Test</h1>
            <p className="text-lg text-neutral-300 mb-8">
                Teste dein Wissen über die Star Realm Regeln! Beantworte alle Fragen und finde heraus, ob du bereit bist.
            </p>

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="ht-test" />

                <Card className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Dein Name / Gamertag <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Dein Ingame Name"
                        className="input w-full"
                    />
                </Card>

                {testQuestions.map((q, qIndex) => (
                    <Card key={qIndex} className="mb-6">
                        <h3 className="text-primary mb-4">
                            Frage {qIndex + 1}: {q.question}
                        </h3>
                        <div className="space-y-3">
                            {q.options.map((option, oIndex) => (
                                <label
                                    key={oIndex}
                                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                                        answers[qIndex] === oIndex
                                            ? 'bg-primary/20 border border-primary'
                                            : 'bg-neutral-800 hover:bg-neutral-700 border border-transparent'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        checked={answers[qIndex] === oIndex}
                                        onChange={() => handleAnswer(qIndex, oIndex)}
                                        className="w-4 h-4"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </Card>
                ))}

                <button
                    type="submit"
                    className="btn btn-lg w-full"
                    disabled={!allAnswered || submitting}
                >
                    {submitting ? 'Wird ausgewertet...' : 'Test abschicken'}
                </button>

                {!allAnswered && (
                    <p className="text-center text-neutral-400 mt-4">
                        Bitte beantworte alle Fragen und gib deinen Namen ein.
                    </p>
                )}
            </form>
        </>
    );
}

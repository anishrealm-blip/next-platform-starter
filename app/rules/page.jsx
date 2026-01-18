import { Card } from '../../components/card';

export const metadata = {
    title: 'Regeln'
};

const rules = [
    {
        icon: '🚫',
        title: 'Kein Cheaten / Hacken',
        description: 'Das Verwenden von Cheats, Hacks oder modifizierten Clients ist streng verboten.'
    },
    {
        icon: '🤝',
        title: 'Kein Rassismus oder Beleidigungen',
        description: 'Respektiere alle Spieler. Hassrede, Diskriminierung und Beleidigungen führen zu einem Ban.'
    },
    {
        icon: '💬',
        title: 'Kein Spam im Chat',
        description: 'Vermeide das Wiederholen von Nachrichten oder das Fluten des Chats.'
    },
    {
        icon: '👋',
        title: 'Respektiere andere Spieler',
        description: 'Behandle andere so, wie du selbst behandelt werden möchtest.'
    },
    {
        icon: '📢',
        title: 'Keine Werbung ohne Erlaubnis',
        description: 'Werbung für andere Server, Realms oder externe Links ist nur mit Erlaubnis gestattet.'
    },
    {
        icon: '🐛',
        title: 'Keine Ausnutzung von Bugs',
        description: 'Wenn du einen Bug findest, melde ihn bitte. Das Ausnutzen von Bugs ist verboten.'
    },
    {
        icon: '👑',
        title: 'Folge den Anweisungen vom Team',
        description: 'Respektiere und folge den Anweisungen von Moderatoren und Admins.'
    }
];

export default function RulesPage() {
    return (
        <>
            <h1 className="mb-4">Regeln</h1>
            <p className="text-lg text-neutral-300 mb-8">
                Um ein angenehmes Spielerlebnis für alle zu gewährleisten, bitten wir euch, diese Regeln zu befolgen.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-8">
                {rules.map((rule, index) => (
                    <Card key={index} className="flex gap-4">
                        <span className="text-3xl">{rule.icon}</span>
                        <div>
                            <h3 className="text-primary mb-2">{rule.title}</h3>
                            <p className="text-neutral-300 text-sm">{rule.description}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="bg-red-900/30 border border-red-500/50">
                <h3 className="text-red-300 mb-3">Konsequenzen bei Regelverstößen</h3>
                <p className="text-neutral-200">
                    Verstöße gegen die Regeln können zu Verwarnungen, temporären Bans oder permanenten Ausschlüssen führen.
                    Die Entscheidung liegt beim Team und ist abhängig von der Schwere des Verstoßes.
                </p>
            </Card>
        </>
    );
}

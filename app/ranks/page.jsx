import { Card } from '../../components/card';

export const metadata = {
    title: 'Ränge'
};

const ranks = [
    {
        name: 'Rookie',
        price: '5 CHF',
        color: 'from-gray-500 to-gray-600',
        benefits: [
            'Rang im Chat',
            'Unterstützung des Projekts',
            'Kleines Dankeschön'
        ]
    },
    {
        name: 'Explorer',
        price: '10 CHF',
        color: 'from-green-500 to-green-600',
        benefits: [
            'Alles von Rookie',
            'Farbiger Chatname',
            'Kleines Loot-Paket auf dem neuen Realm'
        ]
    },
    {
        name: 'Warrior',
        price: '20 CHF',
        color: 'from-blue-500 to-blue-600',
        benefits: [
            'Alles von Explorer',
            'Extra kosmetische Features',
            'Mittleres Loot-Paket auf dem neuen Realm'
        ]
    },
    {
        name: 'Champion',
        price: '35 CHF',
        color: 'from-purple-500 to-purple-600',
        benefits: [
            'Alles von Warrior',
            'Exklusive Effekte / Cosmetics',
            'Großes Loot-Paket auf dem neuen Realm',
            'Priorität bei Events'
        ]
    },
    {
        name: 'Star King',
        price: '50 CHF',
        color: 'from-yellow-400 to-orange-500',
        benefits: [
            'Höchster Rang',
            'Einzigartiger Titel',
            'Besondere Anerkennung im Realm',
            'Exklusives Loot-Paket auf dem neuen Realm',
            'Extra Dank vom Team'
        ],
        featured: true
    }
];

export default function RanksPage() {
    return (
        <>
            <h1 className="mb-4">Ränge</h1>
            <p className="text-lg text-neutral-300 mb-8">
                Unterstütze Star Realm und erhalte exklusive Vorteile! Bezahlung erfolgt über PSN-Guthabenkarten (CHF).
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {ranks.map((rank) => (
                    <Card
                        key={rank.name}
                        className={`relative ${rank.featured ? 'ring-2 ring-yellow-400' : ''}`}
                    >
                        {rank.featured && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                                BELIEBTESTER RANG
                            </div>
                        )}
                        <div className={`bg-gradient-to-r ${rank.color} text-white text-center py-3 -mx-6 -mt-5 mb-4 rounded-t`}>
                            <h3 className="text-xl font-bold">{rank.name}</h3>
                        </div>
                        <div className="text-center mb-4">
                            <span className="text-3xl font-bold text-primary">{rank.price}</span>
                        </div>
                        <ul className="space-y-2">
                            {rank.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>

            <Card className="bg-yellow-900/30 border border-yellow-500/50">
                <h3 className="text-yellow-300 mb-3">Wichtiger Hinweis</h3>
                <ul className="space-y-2 text-neutral-200">
                    <li>• Alle Ränge sind fair und nicht Pay-to-Win.</li>
                    <li>• Loot gibt es nur auf dem neuen Realm, nicht auf PvP-Reichen.</li>
                    <li>• Kontaktiere uns auf Discord oder im Spiel, um einen Rang zu kaufen.</li>
                </ul>
            </Card>
        </>
    );
}

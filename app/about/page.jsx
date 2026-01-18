import { Card } from '../../components/card';

export const metadata = {
    title: 'Über Star Realm'
};

export default function AboutPage() {
    return (
        <>
            <h1 className="mb-8">Über Star Realm</h1>

            <Card className="mb-8">
                <p className="text-lg mb-6">
                    Star Realm ist ein Minecraft-Bedrock-Projekt mit mehreren Realms, die verschiedene Spielarten anbieten.
                    Unser Ziel ist es, eine aktive Community aufzubauen und Spielern Spaß, Competition und Abwechslung zu bieten.
                </p>

                <p className="text-lg mb-6">
                    Aktuell gibt es 2 Star Realms, ein dritter Realm ist bereits geplant und kommt bald dazu.
                </p>
            </Card>

            <h2 className="mb-6">Unsere Realms</h2>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
                <Card>
                    <h3 className="text-primary mb-4">StarCraft S1</h3>
                    <p className="mb-4">
                        Der erste und älteste Realm. Dieser Realm ist immer noch spielbar und bietet klassisches Gameplay
                        für alle, die Survival und normales Spielen mögen.
                    </p>
                    <div className="bg-neutral-800 rounded p-3">
                        <span className="text-sm text-neutral-400">Realm-Code:</span>
                        <code className="ml-2 text-primary">uvUXxRPigb-bCxA</code>
                    </div>
                </Card>

                <Card>
                    <h3 className="text-primary mb-4">Star Practice</h3>
                    <p className="mb-4">
                        Dieser Realm ist speziell für PvP gedacht. Hier könnt ihr gegen andere Spieler kämpfen,
                        trainieren und eure Skills verbessern.
                    </p>
                    <div className="bg-yellow-900/50 border border-yellow-500 rounded p-3 mb-4">
                        <span className="text-yellow-300">Wichtiger Hinweis:</span>
                        <p className="text-sm mt-1">Der Spawn ist aktuell kaputt und wird bald repariert.</p>
                    </div>
                    <div className="bg-neutral-800 rounded p-3">
                        <span className="text-sm text-neutral-400">Realm-Code:</span>
                        <code className="ml-2 text-primary">NmFRm5cMoWbdkhQ</code>
                    </div>
                </Card>
            </div>

            <Card>
                <h3 className="text-primary mb-4">Zukunft von Star Realm</h3>
                <p>
                    Star Realm wächst ständig weiter. Neue Features, neue Ideen und bald ein weiterer Realm sind bereits
                    in Planung. Tritt bei, spiel mit und werde Teil von Star Realm!
                </p>
            </Card>
        </>
    );
}

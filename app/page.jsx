import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section className="text-center py-8">
                <h1 className="mb-6 text-5xl sm:text-6xl">
                    <span className="text-primary">⭐</span> Star Realm
                </h1>
                <p className="mb-8 text-xl text-neutral-300 max-w-2xl mx-auto">
                    Willkommen bei Star Realm – einem Minecraft-Bedrock-Projekt mit mehreren Realms
                    für Survival, PvP und mehr!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/about" className="btn btn-lg">
                        Mehr erfahren
                    </Link>
                    <Link href="/ranks" className="btn btn-lg bg-secondary hover:bg-secondary/85">
                        Ränge ansehen
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="mb-6 text-center">Unsere Realms</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <h3 className="text-primary mb-3">StarCraft S1</h3>
                        <p className="text-neutral-300 mb-4">
                            Klassisches Survival Gameplay für alle, die normales Spielen mögen.
                        </p>
                        <div className="bg-neutral-800 rounded p-3">
                            <span className="text-sm text-neutral-400">Realm-Code:</span>
                            <code className="ml-2 text-primary">uvUXxRPigb-bCxA</code>
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-primary mb-3">Star Practice</h3>
                        <p className="text-neutral-300 mb-4">
                            PvP Training Realm – Kämpfe gegen andere Spieler und verbessere deine Skills!
                        </p>
                        <div className="bg-neutral-800 rounded p-3">
                            <span className="text-sm text-neutral-400">Realm-Code:</span>
                            <code className="ml-2 text-primary">NmFRm5cMoWbdkhQ</code>
                        </div>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-6 text-center">Werde Teil des Teams</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="text-center">
                        <span className="text-4xl mb-4 block">📜</span>
                        <h3 className="text-primary mb-2">Regeln</h3>
                        <p className="text-neutral-300 text-sm mb-4">
                            Lies unsere Serverregeln für ein faires Spielerlebnis.
                        </p>
                        <Link href="/rules" className="btn w-full">
                            Zu den Regeln
                        </Link>
                    </Card>
                    <Card className="text-center">
                        <span className="text-4xl mb-4 block">💡</span>
                        <h3 className="text-primary mb-2">Ideen</h3>
                        <p className="text-neutral-300 text-sm mb-4">
                            Teile deine Ideen für Star Realm mit uns!
                        </p>
                        <Link href="/realm-ideas" className="btn w-full">
                            Idee einreichen
                        </Link>
                    </Card>
                    <Card className="text-center">
                        <span className="text-4xl mb-4 block">🎮</span>
                        <h3 className="text-primary mb-2">MOD werden</h3>
                        <p className="text-neutral-300 text-sm mb-4">
                            Bewirb dich als Moderator im Star Realm Team!
                        </p>
                        <Link href="/mod-application" className="btn w-full">
                            Jetzt bewerben
                        </Link>
                    </Card>
                </div>
            </section>

            <section className="text-center py-8 bg-neutral-900/50 rounded-lg">
                <h2 className="mb-4">Bereit zu spielen?</h2>
                <p className="text-neutral-300 mb-6">
                    Tritt bei, spiel mit und werde Teil von Star Realm!
                </p>
                <Link href="/about" className="btn btn-lg">
                    Jetzt starten
                </Link>
            </section>

            <section>
                <h2 className="mb-6 text-center">Discord & WhatsApp</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <h3 className="text-primary mb-3">Discord</h3>
                        <p className="text-neutral-300 mb-4">
                            Tritt unserem Discord bei! Dort findest du News, Events, Support, Realm-Codes und kannst mit der Community chatten.
                        </p>
                        <a
                            href="https://discord.gg/NT6UWpMNDN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500"
                        >
                            Discord beitreten
                        </a>
                    </Card>
                    <Card>
                        <h3 className="text-primary mb-3">WhatsApp Gruppe</h3>
                        <p className="text-neutral-300 mb-4">
                            Wir erstellen gerade auch eine WhatsApp-Gruppe, damit wir schneller kommunizieren können.
                            Wenn du beitreten willst, sag Bescheid und wir schicken dir den Link.
                        </p>
                        <p className="text-sm text-neutral-400">
                            Kontaktiere uns auf Discord für den Link!
                        </p>
                    </Card>
                </div>
            </section>
        </div>
    );
}

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center border-t border-neutral-700">
            <p className="text-lg mb-2 text-primary">Star Realm</p>
            <p className="text-sm text-neutral-400 mb-4">
                Ein Minecraft Bedrock Projekt
            </p>
            <div className="flex justify-center gap-6 text-sm text-neutral-400 mb-6">
                <Link href="/rules" className="hover:text-primary">
                    Regeln
                </Link>
                <Link href="/about" className="hover:text-primary">
                    Über uns
                </Link>
                <Link href="/mod-application" className="hover:text-primary">
                    Team beitreten
                </Link>
            </div>
            <div className="mb-6">
                <a
                    href="https://discord.gg/NT6UWpMNDN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm transition-colors"
                >
                    Discord beitreten
                </a>
            </div>
            <p className="text-xs text-neutral-500">
                © {new Date().getFullYear()} Star Realm. Alle Rechte vorbehalten.
            </p>
        </footer>
    );
}

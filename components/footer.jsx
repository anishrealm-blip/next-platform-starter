import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center border-t border-neutral-700">
            <p className="text-lg mb-2 text-primary">⭐ Star Realm</p>
            <p className="text-sm text-neutral-400 mb-4">
                Ein Minecraft Bedrock Projekt
            </p>
            <div className="flex justify-center gap-6 text-sm text-neutral-400">
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
            <p className="text-xs text-neutral-500 mt-6">
                © {new Date().getFullYear()} Star Realm. Alle Rechte vorbehalten.
            </p>
        </footer>
    );
}

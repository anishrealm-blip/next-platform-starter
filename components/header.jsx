import Link from 'next/link';

const navItems = [
    { linkText: 'Über Star Realm', href: '/about' },
    { linkText: 'Ränge', href: '/ranks' },
    { linkText: 'Regeln', href: '/rules' },
    { linkText: 'Realm-Ideen', href: '/realm-ideas' },
    { linkText: 'HT Test', href: '/ht-test' },
    { linkText: 'MOD Bewerbung', href: '/mod-application' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 hover:text-primary">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link href="/" className="text-2xl font-bold text-primary no-underline hover:text-primary/80 ml-auto">
                Star Realm
            </Link>
        </nav>
    );
}

import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Star Realm',
        default: 'Star Realm – Minecraft Bedrock Realms'
    },
    description: 'Star Realm ist ein Minecraft-Bedrock-Projekt mit mehreren Realms für Survival, PvP und mehr. Tritt unserer Community bei!'
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

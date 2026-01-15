import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'Homes by Gaby | Real Estate',
    description: 'Find your perfect home with personalized service and local expertise.',
    keywords: 'real estate, homes for sale, houses, property listings',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

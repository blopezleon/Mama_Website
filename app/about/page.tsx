import AboutSection from '@/components/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Gaby | Real Estate Agent',
    description: 'Learn more about Gaby, your trusted Miami real estate agent with personalized service and local expertise.',
};

export default function AboutPage() {
    return (
        <main>
            <AboutSection />
        </main>
    );
}

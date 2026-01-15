import HeroSection from '@/components/HeroSection';
import PropertyCard from '@/components/PropertyCard';
import { client } from '@/lib/sanity.client';
import { propertiesQuery } from '@/lib/queries';
import { Property } from '@/types/property';
import styles from './page.module.css';

export const revalidate = 60; // Revalidate every 60 seconds

async function getProperties(): Promise<Property[]> {
    const properties = await client.fetch(propertiesQuery);
    return properties;
}

export default async function HomePage() {
    const properties = await getProperties();

    return (
        <main>
            <HeroSection />

            <div className="container-content">
                <section className={styles.propertiesSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Featured Collection</h2>
                        <p className={styles.sectionSubtitle}>
                            Handpicked selection you don't want to miss
                        </p>
                    </div>

                    {properties.length > 0 ? (
                        <div className={styles.propertyList}>
                            {properties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>No properties available at the moment. Check back soon!</p>
                        </div>
                    )}
                </section>
            </div>

            <footer className={styles.footer}>
                <div className="container-content">
                    <p className={styles.footerText}>
                        © 2025 Gabs Leon Real Estate. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

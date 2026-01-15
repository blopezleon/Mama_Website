import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity.client';
import { propertyBySlugQuery, propertySlugsQuery } from '@/lib/queries';
import { Property } from '@/types/property';
import StatusBadge from '@/components/StatusBadge';
import { urlFor } from '@/lib/sanity.image';
import styles from './page.module.css';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = await client.fetch<string[]>(propertySlugsQuery);
    return slugs.map((slug) => ({ slug }));
}

async function getProperty(slug: string): Promise<Property | null> {
    const property = await client.fetch(propertyBySlugQuery, { slug });
    return property;
}

export default async function PropertyPage({ params }: Props) {
    const { slug } = await params;
    const property = await getProperty(slug);

    if (!property) {
        notFound();
    }

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(property.price);

    return (
        <main className={styles.propertyPage}>
            <div className="container-content">
                <Link href="/" className={styles.backLink}>
                    ← Back to All Properties
                </Link>

                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>{property.title}</h1>
                        <p className={styles.address}>{property.address}</p>
                    </div>
                    <StatusBadge status={property.status} />
                </div>

                {/* Image Gallery */}
                {property.images && property.images.length > 0 && (
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <Image
                                src={urlFor(property.images[0]).width(1200).height(800).url()}
                                alt={property.title}
                                width={1200}
                                height={800}
                                priority
                                className={styles.image}
                            />
                        </div>
                        {property.images.length > 1 && (
                            <div className={styles.thumbnails}>
                                {property.images.slice(1, 5).map((image, index) => (
                                    <div key={index} className={styles.thumbnail}>
                                        <Image
                                            src={urlFor(image).width(400).height(300).url()}
                                            alt={`${property.title} - Image ${index + 2}`}
                                            width={400}
                                            height={300}
                                            className={styles.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className={styles.content}>
                    {/* Property Details */}
                    <div className={styles.details}>
                        <div className={styles.priceSection}>
                            <h2 className={styles.price}>{formattedPrice}</h2>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{property.bedrooms}</span>
                                <span className={styles.statLabel}>Bedrooms</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{property.bathrooms}</span>
                                <span className={styles.statLabel}>Bathrooms</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>
                                    {property.squareFeet.toLocaleString()}
                                </span>
                                <span className={styles.statLabel}>Sq Ft</span>
                            </div>
                            {property.yearBuilt && (
                                <div className={styles.stat}>
                                    <span className={styles.statValue}>{property.yearBuilt}</span>
                                    <span className={styles.statLabel}>Year Built</span>
                                </div>
                            )}
                            {property.lotSize && (
                                <div className={styles.stat}>
                                    <span className={styles.statValue}>{property.lotSize}</span>
                                    <span className={styles.statLabel}>Acres</span>
                                </div>
                            )}
                        </div>

                        {property.description && (
                            <div className={styles.section}>
                                <h3 className={styles.sectionTitle}>About This Home</h3>
                                <p className={styles.description}>{property.description}</p>
                            </div>
                        )}

                        {/* Agent's Personal Note - The "Mom Touch" */}
                        {property.agentNote && (
                            <div className={styles.agentNote}>
                                <div className={styles.agentNoteHeader}>
                                    <svg
                                        className={styles.heartIcon}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <h3 className={styles.agentNoteTitle}>Why I Love This Home</h3>
                                </div>
                                <p className={styles.agentNoteText}>{property.agentNote}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

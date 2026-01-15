'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import StatusBadge from './StatusBadge';
import styles from './PropertyCard.module.css';
import { urlFor } from '@/lib/sanity.image';

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const {
        slug,
        title,
        images,
        price,
        address,
        neighborhood,
        bedrooms,
        bathrooms,
        squareFeet,
        yearBuilt,
        lotSize,
        description,
        agentNote,
        status,
    } = property;

    // Use images array directly (mainImage is just the first image)
    // Filter out images with missing/invalid asset references to prevent urlFor crashes
    const allImages = (images || [])
        .filter(Boolean)
        .filter((img) => img?.asset?._ref || img?.asset?._id);

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(price);

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent flip if clicking on buttons/links
        if ((e.target as HTMLElement).tagName === 'A' ||
            (e.target as HTMLElement).tagName === 'BUTTON' ||
            (e.target as HTMLElement).closest('a, button')) {
            return;
        }
        setIsFlipped(!isFlipped);
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
            onClick={handleCardClick}
        >
            <div className={styles.card}>
                {/* Front Side */}
                <div className={styles.cardFront}>
                    <div className={styles.imageSection}>
                        {allImages[currentImageIndex] && (
                            <Image
                                src={urlFor(allImages[currentImageIndex]).width(1200).height(600).url()}
                                alt={`${title} - Image ${currentImageIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 75vw"
                                className={styles.image}
                            />
                        )}
                        <div className={styles.badgeWrapper}>
                            <StatusBadge status={status} />
                        </div>

                        {/* Image Navigation Arrows */}
                        {allImages.length > 1 && (
                            <>
                                <button
                                    className={`${styles.imageNav} ${styles.imageNavPrev}`}
                                    onClick={handlePrevImage}
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>
                                <button
                                    className={`${styles.imageNav} ${styles.imageNavNext}`}
                                    onClick={handleNextImage}
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                                <div className={styles.imageCounter}>
                                    {currentImageIndex + 1} / {allImages.length}
                                </div>
                            </>
                        )}
                    </div>
                    <div className={styles.infoSection}>
                        <h3 className={styles.price}>{formattedPrice}</h3>
                        {neighborhood && (
                            <p className={styles.neighborhood}>{neighborhood}</p>
                        )}
                        <div className={styles.details}>
                            <div className={styles.detail}>
                                <span className={styles.detailNumber}>{bedrooms}</span>
                                <span className={styles.detailLabel}>beds</span>
                            </div>
                            <div className={styles.detail}>
                                <span className={styles.detailNumber}>{bathrooms}</span>
                                <span className={styles.detailLabel}>baths</span>
                            </div>
                        </div>
                        <div className={styles.clickHint}>
                            <span>Click for details →</span>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className={styles.cardBack}>
                    <div className={styles.detailsContent}>
                        <div className={styles.backHeader}>
                            <div className={styles.backHeaderLeft}>
                                <h3 className={styles.title}>{title}</h3>
                                <p className={styles.address}>{address}</p>
                            </div>
                            <div className={styles.backHeaderRight}>
                                <p className={styles.backPrice}>{formattedPrice}</p>
                            </div>
                        </div>

                        <div className={styles.backColumns}>
                            {/* Left Column - Specs */}
                            <div className={styles.specsColumn}>
                                <div className={styles.specs}>
                                    <div className={styles.spec}>
                                        <span className={styles.specLabel}>Bedrooms</span>
                                        <span className={styles.specValue}>{bedrooms}</span>
                                    </div>
                                    <div className={styles.spec}>
                                        <span className={styles.specLabel}>Bathrooms</span>
                                        <span className={styles.specValue}>{bathrooms}</span>
                                    </div>
                                    <div className={styles.spec}>
                                        <span className={styles.specLabel}>Square Feet</span>
                                        <span className={styles.specValue}>{squareFeet.toLocaleString()} sq ft</span>
                                    </div>
                                    {yearBuilt && (
                                        <div className={styles.spec}>
                                            <span className={styles.specLabel}>Year Built</span>
                                            <span className={styles.specValue}>{yearBuilt}</span>
                                        </div>
                                    )}
                                    {lotSize && (
                                        <div className={styles.spec}>
                                            <span className={styles.specLabel}>Lot Size</span>
                                            <span className={styles.specValue}>{lotSize} acres</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column - Description */}
                            <div className={styles.descriptionColumn}>
                                {(description || agentNote) && (
                                    <div className={styles.description}>
                                        {agentNote && (
                                            <div className={styles.agentNote}>
                                                <h4 className={styles.noteTitle}>Gaby's Note</h4>
                                                <p>{agentNote}</p>
                                            </div>
                                        )}
                                        {description && agentNote !== description && (
                                            <p>{description}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <a
                            href="tel:+1234567890"
                            className={styles.contactButton}
                            onClick={(e) => e.stopPropagation()}
                        >
                            📞 Contact Gaby
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

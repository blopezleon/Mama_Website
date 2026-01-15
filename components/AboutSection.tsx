import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className="container-content">
                <div className={styles.aboutGrid}>
                    {/* Image Side */}
                    <div className={styles.imageContainer}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/gaby-photo.jpg"
                                alt="Gaby - Real Estate Agent"
                                className={styles.aboutImage}
                            />
                            <div className={styles.imageAccent} />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={styles.contentContainer}>
                        <div className={styles.eyebrow}>About Me</div>
                        <h2 className={styles.title}>Meet Gaby</h2>
                        <p className={styles.subtitle}>
                            Your trusted partner in finding the perfect home
                        </p>

                        <div className={styles.bioText}>
                            <p>
                                With over [X] years of experience in Miami's real estate market,
                                I bring a personal touch to every transaction. My mission is simple:
                                to make your home buying or selling journey as smooth and enjoyable
                                as possible.
                            </p>
                            <p>
                                I believe that finding a home isn't just about square footage and
                                amenities—it's about discovering the place where your life's best
                                moments will unfold. That's why I take the time to truly understand
                                your needs, dreams, and aspirations.
                            </p>
                            <p>
                                Whether you're a first-time buyer, growing family, or looking to
                                downsize, I'm here to guide you every step of the way with
                                expertise, integrity, and genuine care.
                            </p>
                        </div>

                        {/* Credentials */}
                        <div className={styles.credentials}>
                            <div className={styles.credentialItem}>
                                <div className={styles.credentialIcon}>🏆</div>
                                <div>
                                    <div className={styles.credentialTitle}>Licensed Realtor</div>
                                    <div className={styles.credentialDesc}>State of Florida</div>
                                </div>
                            </div>
                            <div className={styles.credentialItem}>
                                <div className={styles.credentialIcon}>📍</div>
                                <div>
                                    <div className={styles.credentialTitle}>Local Expert</div>
                                    <div className={styles.credentialDesc}>Miami Specialist</div>
                                </div>
                            </div>
                            <div className={styles.credentialItem}>
                                <div className={styles.credentialIcon}>⭐</div>
                                <div>
                                    <div className={styles.credentialTitle}>Client-Focused</div>
                                    <div className={styles.credentialDesc}>Personalized Service</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className={styles.ctaButtons}>
                            <a href="tel:+1234567890" className="btn btn-primary">
                                📞 Get In Touch
                            </a>
                            <a href="mailto:gaby@realestate.com" className="btn btn-secondary">
                                ✉️ Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <h1 className={styles.heroTitle}>Finding your place in Miami</h1>
                    <p className={styles.heroSubtitle}>
                        I'm your Real Estate Agent. Welcome Home.
                    </p>
                </div>
                <div className={styles.decorativeElement}>
                    <img src="/gabyphoto.jpg" alt="Gaby" className={styles.accent} />
                </div>
            </div>
        </section>
    );
}


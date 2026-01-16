'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Gabs Leon Real Estate
                </Link>

                <div className={styles.navLinks}>
                    <Link
                        href="/"
                        className={pathname === '/' ? styles.navLinkActive : styles.navLink}
                    >
                        Properties
                    </Link>
                    <Link
                        href="/about"
                        className={pathname === '/about' ? styles.navLinkActive : styles.navLink}
                    >
                        About Me
                    </Link>
                    <a
                        href="tel:+17866172256"
                        className={`${styles.navLink} ${styles.navContact}`}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

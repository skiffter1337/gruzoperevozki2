'use client'

import styles from './Footer.module.scss'
import {useTranslation} from "@/hooks/use-translation";

interface FooterProps {
    lang: string
}

export function Footer({ lang }: FooterProps) {
    const t = useTranslation(lang as any)

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>MoveIsrael</h3>
                        <p>{t.footer.rights}</p>
                    </div>

                    <div className={styles.contacts}>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.phone}:</strong> +972-123-4567
                        </div>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.email}:</strong> info@moveisrael.com
                        </div>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.address}:</strong> Израиль
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
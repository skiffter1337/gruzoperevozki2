'use client'

import styles from './Footer.module.scss'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

interface FooterProps {
    lang: string
}

export function Footer({lang}: FooterProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>{t.footer.companyName}</h3>
                        <p>{t.footer.rights}</p>
                    </div>

                    <div className={styles.contacts}>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.phone}:</strong> 050-307-3160
                        </div>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.email}:</strong> bullmovings@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
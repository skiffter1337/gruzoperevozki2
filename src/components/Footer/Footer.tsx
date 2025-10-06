'use client'

import styles from './Footer.module.scss'
import {useTranslation} from "@/hooks/use-translation";

// Определяем возможные значения языка
type Language = 'ru' | 'he' | 'en'

interface FooterProps {
    lang: string
}

export function Footer({lang}: FooterProps) {
    // Приводим lang к типу Language с проверкой
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    // Функция для локализации адреса
    const getLocalizedAddress = (): string => {
        switch (language) {
            case 'ru':
                return 'Израиль'
            case 'he':
                return 'ישראל'
            case 'en':
                return 'Israel'
            default:
                return 'Israel'
        }
    }

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
                            <strong>{t.footer.phone}:</strong> +972-123-4567
                        </div>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.email}:</strong> info@moveisrael.com
                        </div>
                        <div className={styles.contactItem}>
                            <strong>{t.footer.address}:</strong> {getLocalizedAddress()}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
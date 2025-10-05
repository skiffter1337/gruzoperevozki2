'use client'

import {Button} from 'antd'
import styles from './HeroSection.module.scss'
import {useTranslation} from "@/hooks/use-translation";

// Определяем возможные значения языка
type Language = 'ru' | 'he' | 'en'

interface HeroSectionProps {
    lang: string
}

export function HeroSection({lang}: HeroSectionProps) {
    // Приводим lang к типу Language с проверкой
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t.hero.title}</h1>
                    <p className={styles.subtitle}>{t.hero.subtitle}</p>
                    <Button
                        type="primary"
                        size="large"
                        className={styles.ctaButton}
                        onClick={scrollToContact}
                    >
                        {t.hero.cta}
                    </Button>
                </div>
            </div>
            <div className={styles.overlay}></div>
        </section>
    )
}
'use client'

import { Button } from 'antd'
import styles from './HeroSection.module.scss'
import {useTranslation} from "@/hooks/use-translation";

interface HeroSectionProps {
    lang: string
}

export function HeroSection({ lang }: HeroSectionProps) {
    const t = useTranslation(lang as any)

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
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
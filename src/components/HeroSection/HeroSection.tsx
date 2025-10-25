'use client'

import {Button} from 'antd'
import styles from './HeroSection.module.scss'
import {useTranslation} from "@/hooks/use-translation";
import Image from 'next/image';
import {PhoneFilled, PhoneOutlined} from "@ant-design/icons";

type Language = 'ru' | 'he' | 'en'

interface HeroSectionProps {
    lang: string
}

export function HeroSection({lang}: HeroSectionProps) {
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

                    <div className={styles.logoWrapper}>
                        <Image
                            src='/logo.PNG'
                            alt='logo'
                            width={700}
                            height={700}
                            className={styles.logo}
                            priority
                        />
                        <a
                            href="tel:0503073160"
                            className={styles.phoneNumber}
                        >
                            <div>{t.hero.call} - 050-307-3160</div>
                            <PhoneOutlined/>
                        </a>
                    </div>
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
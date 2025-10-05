'use client'

import { useState } from 'react'
import { Select, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Header.module.scss'
import Link from 'next/link'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

interface HeaderProps {
    lang: string
}

export default function Header({ lang }: HeaderProps) {

    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleLanguageChange = (value: string) => {
        window.location.href = `/${value}`
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href={`/${language}`}>
                        <span>MoveIsrael</span>
                    </Link>
                </div>

                <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                    <button onClick={() => scrollToSection('about')}>{t.header.about}</button>
                    <button onClick={() => scrollToSection('services')}>{t.header.services}</button>
                    <button onClick={() => scrollToSection('reviews')}>{t.header.reviews}</button>
                    <button onClick={() => scrollToSection('articles')}>{t.header.articles}</button>
                    <button onClick={() => scrollToSection('contact')}>{t.header.contact}</button>
                </nav>

                <div className={styles.controls}>
                    <Select
                        defaultValue={language}
                        style={{ width: 100 }}
                        onChange={handleLanguageChange}
                        options={[
                            { value: 'ru', label: 'Рус' },
                            { value: 'he', label: 'עב' },
                            { value: 'en', label: 'Eng' }
                        ]}
                    />

                    <Button
                        type="primary"
                        className={styles.ctaButton}
                        onClick={() => scrollToSection('contact')}
                    >
                        {t.header.contact}
                    </Button>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <MenuOutlined />
                    </button>
                </div>
            </div>
        </header>
    )
}
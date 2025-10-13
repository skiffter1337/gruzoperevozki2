'use client'

import {useState} from 'react'
import {Select} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import styles from './Header.module.scss'
import {useTranslation} from "@/hooks/use-translation";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'

type Language = 'ru' | 'he' | 'en'

interface HeaderProps {
    lang: string
}

export default function Header({lang}: HeaderProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'he') as Language
    const t = useTranslation(language)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (value: string) => {
        let currentPath = pathname
        if (pathname.startsWith('/ru/') || pathname.startsWith('/en/')) {
            currentPath = pathname.substring(3)
        } else if (pathname === '/ru' || pathname === '/en') {
            currentPath = '/'
        }

        if (value === 'he') {
            router.push(currentPath || '/')
        } else {
            router.push(`/${value}${currentPath}`)
        }
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setMobileMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/logo.PNG" alt="Logo" width={60} height={60}/>
                    <span>{t.header.companyName}</span>
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
                        value={language}
                        style={{width: 60}}
                        onChange={handleLanguageChange}
                        options={[
                            {value: 'he', label: 'עב'},
                            {value: 'ru', label: 'ru'},
                            {value: 'en', label: 'en'}
                        ]}
                    />
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
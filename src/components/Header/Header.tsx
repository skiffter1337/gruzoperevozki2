'use client'

import {useState} from 'react'
import {Select} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import styles from './Header.module.scss'
import {useTranslation} from "@/hooks/use-translation";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

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

    const isHomePage = pathname === '/' || pathname === '/ru' || pathname === '/en'
    const isArticlesPage = pathname.includes('/articles') && !pathname.includes('/articles/')
    const isSingleArticlePage = pathname.includes('/articles/')

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

    const handleNavigation = (sectionId: string) => {
        setMobileMenuOpen(false)

        if (isHomePage) {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({behavior: 'smooth'})
            }
            return
        }

        if (isArticlesPage || isSingleArticlePage) {
            const basePath = language === 'he' ? '/' : `/${language}`

            if (sectionId === 'articles') {
                return
            }

            router.push(`${basePath}#${sectionId}`)
        }
    }

    const getNavigationPath = (sectionId: string) => {
        if (isHomePage) {
            return `#${sectionId}`
        }

        const basePath = language === 'he' ? '/' : `/${language}`
        return `${basePath}#${sectionId}`
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={language === 'he' ? '/' : `/${language}`} className={styles.logo}>
                    <Image src="/logo.PNG" alt="Logo" width={60} height={60}/>
                    <span>{t.header.companyName}</span>
                </Link>

                <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
                    {isHomePage ? (
                        <>
                            <button onClick={() => handleNavigation('about')}>{t.header.about}</button>
                            <button onClick={() => handleNavigation('services')}>{t.header.services}</button>
                            <button onClick={() => handleNavigation('reviews')}>{t.header.reviews}</button>
                            <button onClick={() => handleNavigation('articles')}>{t.header.articles}</button>
                            <button onClick={() => handleNavigation('contact')}>{t.header.contact}</button>
                        </>
                    ) : (
                        <>
                            <Link
                                href={getNavigationPath('about')}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t.header.about}
                            </Link>
                            <Link
                                href={getNavigationPath('services')}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t.header.services}
                            </Link>
                            <Link
                                href={getNavigationPath('reviews')}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t.header.reviews}
                            </Link>

                            {!isArticlesPage && !isSingleArticlePage && (
                                <Link
                                    href={getNavigationPath('articles')}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t.header.articles}
                                </Link>
                            )}

                            <Link
                                href={getNavigationPath('contact')}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t.header.contact}
                            </Link>
                        </>
                    )}
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
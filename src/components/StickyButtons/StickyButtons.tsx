'use client'

import {useState, useEffect} from 'react'
import {PhoneOutlined, WhatsAppOutlined} from '@ant-design/icons'
import styles from './StickyButtons.module.scss'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

interface StickyButtonsProps {
    lang: string
}

export function StickyButtons({lang}: StickyButtonsProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const [mounted, setMounted] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, {passive: true})
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', checkMobile)
        }
    }, [lastScrollY])

    const phoneNumber = '+972503073160'
    const whatsappNumber = '+972503073160'

    const formattedPhone = phoneNumber.replace(/[^0-9+]/g, '')
    const formattedWhatsApp = whatsappNumber.replace(/[^0-9]/g, '')

    const whatsappText = encodeURIComponent(
        lang === 'ru' ? 'Здравствуйте! Я хочу заказать переезд.' :
            lang === 'he' ? 'שלום! אני רוצה להזמין מעבר.' :
                'Hello! I would like to order a move.'
    )

    if (!mounted) {
        return null
    }

    return (
        <div
            className={`${styles.stickyButtons} ${isVisible ? styles.visible : styles.hidden} ${isMobile ? styles.mobile : styles.desktop}`}>
            {isMobile ? (
                <div className={styles.mobileButtons}>
                    <a
                        href={`tel:${formattedPhone}`}
                        className={`${styles.button} ${styles.phoneButton}`}
                        aria-label={t.stickyButtons.callUs}
                    >
                        <PhoneOutlined className={styles.icon}/>
                        <span className={styles.buttonText}>{t.stickyButtons.call}</span>
                    </a>

                    <a
                        href={`https://wa.me/${formattedWhatsApp}?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.whatsappButton}`}
                        aria-label={t.stickyButtons.whatsappUs}
                    >
                        <WhatsAppOutlined className={styles.icon}/>
                        <span className={styles.buttonText}>{t.stickyButtons.whatsapp}</span>
                    </a>
                </div>
            ) : (
                <>
                    <a
                        href={`tel:${formattedPhone}`}
                        className={`${styles.button} ${styles.phoneButton}`}
                        aria-label={t.stickyButtons.callUs}
                    >
                        <PhoneOutlined className={styles.icon}/>
                        <span className={styles.tooltip}>
                            {t.stickyButtons.call}
                        </span>
                    </a>

                    <a
                        href={`https://wa.me/${formattedWhatsApp}?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.whatsappButton}`}
                        aria-label={t.stickyButtons.whatsappUs}
                    >
                        <WhatsAppOutlined className={styles.icon}/>
                        <span className={styles.tooltip}>
                            {t.stickyButtons.whatsapp}
                        </span>
                    </a>
                </>
            )}
        </div>
    )
}
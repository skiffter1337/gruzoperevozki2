'use client'

import { useState, useEffect } from 'react'
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import styles from './StickyButtons.module.scss'
import { useParams } from 'next/navigation'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

export function StickyButtons() {
    const params = useParams()
    const lang = params.lang as Language
    const [mounted, setMounted] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        setMounted(true)

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const t = useTranslation(lang)

    const phoneNumber = '+79012818032'
    const whatsappNumber = '+79012818032'

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
        <div className={`${styles.stickyButtons} ${isVisible ? styles.visible : styles.hidden}`}>
            <a
                href={`tel:${formattedPhone}`}
                className={`${styles.button} ${styles.phoneButton}`}
                aria-label={t.stickyButtons.callUs}
            >
                <PhoneOutlined className={styles.icon} />
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
                <WhatsAppOutlined className={styles.icon} />
                <span className={styles.tooltip}>
          {t.stickyButtons.whatsapp}
        </span>
            </a>
        </div>
    )
}
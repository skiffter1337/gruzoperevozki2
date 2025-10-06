'use client'

import { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import styles from './PhotoGallery.module.scss'
import { useParams } from 'next/navigation'
import {useTranslation} from "@/hooks/use-translation";
import {GalleryPhoto} from "@/components/PhotoGallery/model/types";

type Language = 'ru' | 'he' | 'en'

export function PhotoGallery() {
    const params = useParams()
    const lang = params.lang as Language
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const t = useTranslation(lang)

    const photos: GalleryPhoto[] = [
        {
            id: 1,
            src: '/works1.jpg',
            alt: t.gallery.photos.find(p => p.id === 1)?.alt || 'Грузовой автомобиль'
        },
        {
            id: 2,
            src: '/works2.jpg',
            alt: t.gallery.photos.find(p => p.id === 2)?.alt || 'Переезд квартиры'
        },
        {
            id: 3,
            src: '/works3.jpg',
            alt: t.gallery.photos.find(p => p.id === 3)?.alt || 'Офисный переезд'
        },
        {
            id: 4,
            src: '/works4.jpg',
            alt: t.gallery.photos.find(p => p.id === 4)?.alt || 'Упаковка вещей'
        },
        {
            id: 5,
            src: '/works5.jpg',
            alt: t.gallery.photos.find(p => p.id === 5)?.alt || 'Работа команды'
        },
    ]

    const placeholderImages = [
        '🚛', '📦', '🏢', '👥', '🏠', '📱'
    ]

    if (!mounted) {
        return (
            <section className={styles.gallery}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{t.gallery.title}</h2>
                    <div className={styles.skeletonCarousel}>
                        <div className={styles.skeletonSlide}></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.gallery.title}</h2>

                <div className={styles.carouselWrapper}>
                    <Carousel
                        autoplay
                        autoplaySpeed={4000}
                        speed={1000}
                        dots={{ className: styles.carouselDots }}
                        arrows={false}
                        pauseOnHover={true}
                        className={styles.carousel}
                        effect="fade"
                    >
                        {photos.map((photo, index) => (
                            <div key={photo.id} className={styles.slide}>
                                <div className={styles.photoContainer}>
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className={styles.photo}
                                        onError={(e) => {
                                            // Если изображение не загружается, показываем placeholder
                                            e.currentTarget.style.display = 'none'
                                            const placeholder = document.getElementById(`placeholder-${photo.id}`)
                                            if (placeholder) {
                                                placeholder.style.display = 'flex'
                                            }
                                        }}
                                    />
                                    <div
                                        id={`placeholder-${photo.id}`}
                                        className={styles.photoPlaceholder}
                                        style={{ display: 'none' }}
                                    >
                    <span className={styles.placeholderIcon}>
                      {placeholderImages[index] || '📷'}
                    </span>
                                        <span className={styles.placeholderText}>{photo.alt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    {/* Декоративные элементы */}
                    <div className={styles.gradientOverlay}></div>
                    <div className={styles.pattern}></div>
                </div>

            </div>
        </section>
    )
}
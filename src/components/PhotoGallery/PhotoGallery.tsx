'use client'

import {useEffect, useState} from 'react'
import {Carousel} from 'antd'
import styles from './PhotoGallery.module.scss'
import {useTranslation} from "@/hooks/use-translation";
import {GalleryPhoto, GalleryVideo} from "@/components/PhotoGallery/model/types";

type Language = 'ru' | 'he' | 'en'

interface PhotoGalleryProps {
    lang: string
}

export function PhotoGallery({lang}: PhotoGalleryProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const photos: GalleryPhoto[] = [
        {
            id: 1,
            src: '/works1.jpg',
            alt: t.gallery.photos.find(p => p.id === 1)?.alt || ""
        },
        {
            id: 2,
            src: '/works2.jpg',
            alt: t.gallery.photos.find(p => p.id === 2)?.alt || ""
        },
        {
            id: 3,
            src: '/works3.jpg',
            alt: t.gallery.photos.find(p => p.id === 3)?.alt || ""
        },
        {
            id: 4,
            src: '/works4.jpg',
            alt: t.gallery.photos.find(p => p.id === 4)?.alt || ""
        },
        {
            id: 5,
            src: '/works5.jpg',
            alt: t.gallery.photos.find(p => p.id === 5)?.alt || ""
        },
        {
            id: 6,
            src: '/works6.jpg',
            alt: t.gallery.photos.find(p => p.id === 6)?.alt || ""
        },
    ]

    const videos: GalleryVideo[] = [
        {
            id: 1,
            youtubeId: "5-PK3lPsyDg?si=YEJVYeTo28Dc1Lwc",
        },
        {
            id: 2,
            youtubeId: "5-PK3lPsyDg?si=YEJVYeTo28Dc1Lwc",
        },
        {
            id: 3,
            youtubeId: "5-PK3lPsyDg?si=YEJVYeTo28Dc1Lwc",
        }
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
                    <div className={styles.videoSection}>
                        <h3 className={styles.videoTitle}>{t.gallery.videoTitle || "Наши видео"}</h3>
                        <div className={styles.skeletonVideo}></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.gallery.title}</h2>

                {/* Фотогалерея */}
                <div className={styles.carouselWrapper}>
                    <Carousel
                        speed={1000}
                        dots={{className: styles.carouselDots}}
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
                                        style={{display: 'none'}}
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

                {/* Видеогалерея */}
                <div className={styles.videoSection}>
                    <h3 className={styles.videoTitle}>{t.gallery.videoTitle || "Наши видео"}</h3>

                    <div className={styles.videoCarouselWrapper}>
                        <Carousel
                            speed={800}
                            dots={{className: styles.videoCarouselDots}}
                            arrows={false}
                            pauseOnHover={true}
                            className={styles.videoCarousel}
                            effect="fade"
                        >
                            {videos.map((video) => (
                                <div key={video.id} className={styles.videoSlide}>
                                    <div className={styles.videoContainer}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={styles.video}
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        {/* Декоративные элементы для видео слайдера */}
                        <div className={styles.videoGradientOverlay}></div>
                        <div className={styles.videoPattern}></div>
                    </div>
                </div>

            </div>
        </section>
    )
}
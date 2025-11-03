'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { Carousel } from 'antd'
import styles from './PhotoGallery.module.scss'
import { useTranslation } from "@/hooks/use-translation"
import { GalleryPhoto, GalleryVideo } from "@/components/PhotoGallery/model/types"
import Image from "next/image";

type Language = 'ru' | 'he' | 'en'

interface PhotoGalleryProps {
    lang: string
}

type CarouselRef = {
    next: () => void
    prev: () => void
}

export function PhotoGallery({ lang }: PhotoGalleryProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const [mounted, setMounted] = useState(false)
    const videoCarouselRef = useRef<CarouselRef | null>(null)

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
            id: 7,
            src: '/works7.jpg',
            alt: t.gallery.photos.find(p => p.id === 7)?.alt || ""
        },
        {
            id: 8,
            src: '/works8.jpg',
            alt: t.gallery.photos.find(p => p.id === 8)?.alt || ""
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
        {
            id: 9,
            src: '/works9.jpg',
            alt: t.gallery.photos.find(p => p.id === 9)?.alt || ""
        },
        {
            id: 10,
            src: '/works10.jpg',
            alt: t.gallery.photos.find(p => p.id === 10)?.alt || ""
        },
        {
            id: 11,
            src: '/works11.jpg',
            alt: t.gallery.photos.find(p => p.id === 11)?.alt || ""
        },
        {
            id: 12,
            src: '/works12.jpg',
            alt: t.gallery.photos.find(p => p.id === 12)?.alt || ""
        },

    ]

    const videos: GalleryVideo[] = [
        {
            id: 1,
            youtubeId: "5-PK3lPsyDg",
        },
        {
            id: 2,
            youtubeId: "U2Y2heTMV1U?si=R3A9w3EEmrzrQNYX",
        },
        {
            id: 3,
            youtubeId: "jmBmVDfAhkg?si=gvoZLKj9wlHcdLnk",
        },
        {
            id: 4,
            youtubeId: "FWg78AXatsI?si=1h7dmQuNDBAH6e2c",
        },
    ]

    const placeholderImages = [
        '🚛', '📦', '🏢', '👥', '🏠', '📱'
    ]

    const nextVideo = useCallback(() => {
        videoCarouselRef.current?.next()
    }, [])

    const prevVideo = useCallback(() => {
        videoCarouselRef.current?.prev()
    }, [])

    const setCarouselRef = useCallback((ref: CarouselRef | null) => {
        videoCarouselRef.current = ref
    }, [])

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

                <div className={styles.carouselWrapper}>
                    <Carousel
                        speed={100}
                        dots={{ className: styles.carouselDots }}
                        arrows={false}
                        className={styles.carousel}
                        swipe={true}
                        touchMove={true}
                        draggable={true}
                        touchThreshold={50}
                        swipeToSlide={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {photos.map((photo, index) => (
                            <div key={photo.id} className={styles.slide}>
                                <div className={styles.photoContainer}>
                                    <Image
                                        width={200}
                                        height={200}
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
                                        style={{ pointerEvents: 'none' }}
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

                    <div className={styles.gradientOverlay}></div>
                    <div className={styles.pattern}></div>
                </div>

                <div className={styles.videoSection}>
                    <h3 className={styles.videoTitle}>{t.gallery.videoTitle || "Наши видео"}</h3>

                    <div className={styles.videoCarouselWrapper}>
                        <button
                            className={`${styles.navArrow} ${styles.navArrowPrev}`}
                            onClick={prevVideo}
                            aria-label="Предыдущее видео"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button
                            className={`${styles.navArrow} ${styles.navArrowNext}`}
                            onClick={nextVideo}
                            aria-label="Следующее видео"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <Carousel
                            ref={setCarouselRef}
                            speed={800}
                            dots={{ className: styles.videoCarouselDots }}
                            arrows={false}
                            pauseOnHover={true}
                            className={styles.videoCarousel}
                            effect="fade"
                            swipe={true}
                            touchMove={true}
                            draggable={true}
                            swipeToSlide={true}
                        >
                            {videos.map((video) => (
                                <div key={video.id} className={styles.videoSlide}>
                                    <div className={styles.videoContainer}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={styles.video}
                                            title={`video-${video.id}`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        <div className={styles.videoGradientOverlay}></div>
                        <div className={styles.videoPattern}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
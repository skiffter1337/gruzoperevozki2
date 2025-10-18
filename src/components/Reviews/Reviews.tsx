'use client'

import {Card, Carousel} from 'antd'
import styles from './Reviews.module.scss'
import {useTranslation} from "@/hooks/use-translation"

type Language = 'ru' | 'he' | 'en'

interface ReviewsProps {
    lang: string
}

export function Reviews({lang}: ReviewsProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    return (
        <section id="reviews" className={styles.reviews}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.reviews.title}</h2>

                <div className={styles.carouselWrapper}>
                    <Carousel
                        autoplay
                        dots={{className: styles.carouselDots}}
                        className={styles.carousel}
                        swipe={true}
                        touchMove={true}
                        draggable={true}
                        swipeToSlide={true}
                    >
                        {t.reviews.items.map((review, index) => (
                            <div key={index} className={styles.slide}>
                                <Card className={styles.reviewCard}>
                                    <div className={styles.reviewContent}>
                                        <p className={styles.reviewText}>&#34;{review.text}&#34;</p>
                                        <div className={styles.reviewAuthor}>- {review.name}</div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
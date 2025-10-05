'use client'

import {Card, Carousel} from 'antd'
import styles from './Reviews.module.scss'
import {useTranslation} from "@/hooks/use-translation";

interface ReviewsProps {
    lang: string
}

export function Reviews({lang}: ReviewsProps) {
    const t = useTranslation(lang as any)

    return (
        <section id="reviews" className={styles.reviews}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.reviews.title}</h2>

                <Carousel
                    autoplay
                    dots={{className: styles.carouselDots}}
                    className={styles.carousel}
                >
                    {t.reviews.items.map((review, index) => (
                        <div key={index} className={styles.slide}>
                            <Card className={styles.reviewCard}>
                                <div className={styles.reviewContent}>
                                    <p className={styles.reviewText}>"{review.text}"</p>
                                    <div className={styles.reviewAuthor}>- {review.name}</div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}
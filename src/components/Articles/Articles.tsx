'use client'

import {Button, Card, Carousel, Col, Row} from 'antd'
import styles from './Articles.module.scss'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useTranslation} from "@/hooks/use-translation";
import Image from "next/image";

type Language = 'ru' | 'he' | 'en'

interface Article {
    id: string
    title: string
    description: string
    image: string
}

interface ArticlesProps {
    lang: string
}

export function Articles({lang}: ArticlesProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const getArticlePath = (articleId: string) => {
        if (language === 'he') {
            return `/articles/${articleId}`
        } else {
            return `/${language}/articles/${articleId}`
        }
    }

    if (!mounted) {
        return (
            <section id="articles" className={styles.articles}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Полезные статьи</h2>
                    <div className={styles.skeletonGrid}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={styles.skeletonCard}>
                                <div className={styles.skeletonImage}></div>
                                <div className={styles.skeletonContent}>
                                    <div className={styles.skeletonTitle}></div>
                                    <div className={styles.skeletonDescription}></div>
                                    <div className={styles.skeletonButton}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    const ArticleCard = ({article}: { article: Article }) => (
        <Card
            className={styles.articleCard}
            cover={
                <div className={styles.articleImage}>
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={200}
                        height={200}
                    />
                </div>
            }
        >
            <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleDescription}>{article.description}</p>
                <div className={styles.buttonContainer}>
                    <Link href={getArticlePath(article.id)}>
                        <Button type="primary" className={styles.readMoreButton}>
                            {t.articles.readMore}
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    )

    return (
        <section id="articles" className={styles.articles}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.articles.title}</h2>
                <Link href={language === 'he' ? '/articles' : `/${language}/articles`}
                      className={styles.allArticlesLink}>
                    <Button type="link" className={styles.allArticlesButton}>
                        {t.articles.viewAll}
                    </Button>
                </Link>
                {isMobile ? (
                    <div className={styles.mobileSlider}>
                        <Carousel
                            dots={{className: styles.carouselDots}}
                            arrows={false}
                            className={styles.carousel}
                            swipe={true}
                            draggable={true}
                            touchMove={true}
                            adaptiveHeight={false}
                            infinite={true}
                        >
                            {t.articles.items.map((article: Article, index) => {
                                if (index > 5) return
                                return (
                                    <div key={article.id} className={styles.slide}>
                                        <ArticleCard article={article}/>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                ) : (
                    <Row gutter={[24, 24]} className={styles.articlesGrid}>
                        {t.articles.items.map((article: Article, index) => {
                            if (index > 7) return
                            return (
                                <Col xs={24} md={12} lg={6} key={article.id}>
                                    <ArticleCard article={article}/>
                                </Col>
                            )
                        })}
                    </Row>
                )}
            </div>
        </section>
    )
}
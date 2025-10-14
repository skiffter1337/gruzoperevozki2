'use client'

import {Button, Card, Col, Row, Tag} from 'antd'
import styles from './AllArticles.module.scss'
import Link from 'next/link'
import {useTranslation} from "@/hooks/use-translation"
import Image from 'next/image'

type Language = 'ru' | 'he' | 'en'

interface Article {
    id: string
    title: string
    description: string
    image: string
    readTime?: string
    keywords?: string[]
}

interface AllArticlesProps {
    lang: string
}

export function AllArticles({lang}: AllArticlesProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'he') as Language
    const t = useTranslation(language)

    const getArticlePath = (articleId: string) => {
        if (language === 'he') {
            return `/articles/${articleId}`
        } else {
            return `/${language}/articles/${articleId}`
        }
    }

    const getBackPath = () => {
        if (language === 'he') {
            return '/'
        } else {
            return `/${language}`
        }
    }

    const articles = t.articles?.items || []
    const homeText = t.articles?.home || 'Главная'
    const allArticlesText = t.articles?.allArticles || 'Все статьи'
    const allArticlesTitle = t.articles?.allArticlesTitle || 'Полезные статьи'
    const allArticlesDescription = t.articles?.allArticlesDescription || 'Статьи и руководства'
    const readMoreText = t.articles?.readMore || 'Читать далее'
    const noResultsText = t.articles?.noResults || 'Статьи не найдены'
    const tryAnotherText = t.articles?.tryAnotherCategory || 'Попробуйте выбрать другую категорию'

    return (
        <section className={styles.allArticles}>
            <div className={styles.container}>

                <nav className={styles.breadcrumbs}>
                    <Link href={getBackPath()} className={styles.breadcrumbLink}>
                        {homeText}
                    </Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span className={styles.breadcrumbCurrent}>{allArticlesText}</span>
                </nav>


                <div className={styles.header}>
                    <h1 className={styles.title}>{allArticlesTitle}</h1>
                    <p className={styles.subtitle}>{allArticlesDescription}</p>
                </div>


                {/* Список статей */}
                <Row gutter={[24, 24]} className={styles.articlesGrid}>
                    {articles.map((article: Article) => (
                        <Col xs={24} md={12} lg={8} key={article.id}>
                            <Card
                                className={styles.articleCard}
                                cover={
                                    <div className={styles.articleImage}>
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            width={400}
                                            height={250}
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                }
                                actions={[
                                    <div className={styles.actionBlock} key="read">
                                        <Link href={getArticlePath(article.id)}>
                                            <Button type="primary" className={styles.readButton}>
                                                {readMoreText}
                                            </Button>
                                        </Link>
                                    </div>
                                ]}
                            >
                                <div className={styles.articleContent}>
                                    {article.readTime && (
                                        <div className={styles.articleMeta}>
                                        <span className={styles.readTime}>
                                            {article.readTime}
                                        </span>
                                        </div>
                                    )}
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleDescription}>{article.description}</p>

                                    {/* Ключевые слова */}
                                    {article.keywords && article.keywords.length > 0 && (
                                        <div className={styles.keywords}>
                                            {article.keywords.slice(0, 3).map((keyword, index) => (
                                                <Tag key={index} className={styles.keywordTag}>
                                                    {keyword}
                                                </Tag>
                                            ))}
                                            {article.keywords.length > 3 && (
                                                <Tag className={styles.moreTag}>
                                                    +{article.keywords.length - 3}
                                                </Tag>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Сообщение если нет статей */}
                {articles.length === 0 && (
                    <div className={styles.noResults}>
                        <h3>{noResultsText}</h3>
                        <p>{tryAnotherText}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
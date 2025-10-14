'use client'

import Link from 'next/link'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import styles from './Article.module.scss'
import Image from 'next/image'

type Language = 'ru' | 'en' | 'he'

interface ArticleContentProps {
    article: {
        title: Record<Language, string>
        description: Record<Language, string>
        content: Record<Language, string>
        image: string
        readTime: Record<Language, string>
        keywords: Record<Language, string[]>
    }
    lang: Language
    backUrl: string
}

export function ArticleContent({ article, lang, backUrl }: ArticleContentProps) {
    const processContent = (content: string) => {
        return content.replace(/\/\[lang\]\//g, `/${lang}/`)
    }

    const backText = {
        ru: 'Назад',
        en: 'Back',
        he: 'לַחֲזוֹר'
    }[lang]

    return (
        <div className={styles.articlePage}>
            <div className={styles.container}>
                <Link href={backUrl}>
                    <Button
                        type="text"
                        icon={<ArrowLeftOutlined />}
                        className={styles.backButton}
                    >
                        {backText}
                    </Button>
                </Link>

                <article className={styles.article}>
                    <header className={styles.articleHeader}>
                        <h1 className={styles.articleTitle}>{article.title[lang]}</h1>
                        <div className={styles.articleMeta}>
                            <span className={styles.readTime}>{article.readTime[lang]}</span>
                        </div>
                        {article.image && (
                            <div className={styles.articleImage}>
                                <Image
                                    src={article.image}
                                    alt={article.title[lang]}
                                    loading="lazy"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        )}
                    </header>

                    <div
                        className={styles.articleContent}
                        dangerouslySetInnerHTML={{
                            __html: processContent(article.content[lang])
                        }}
                    />
                </article>
            </div>
        </div>
    )
}
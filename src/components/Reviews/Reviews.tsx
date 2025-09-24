"use client"
import {useState} from 'react';
import {Row, Col, Rate, Avatar, Input, Button, message} from 'antd';
import {
    PhoneOutlined,
    StarFilled,
    UserOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    SendOutlined,
} from '@ant-design/icons';
import styles from './Reviews.module.scss';
import {getCompanyStats, getReviewsData} from "@/components/Reviews/model/helpers";

interface ReviewsProps {
    lang: 'ru' | 'he';
    translations: any;
}

function ReviewsStructuredData({ lang, reviewsData, companyName }: {
    lang: string;
    reviewsData: any[];
    companyName: string;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyName,
        "description": lang === 'he'
            ? "שירותים מקצועיים למעבר דירה והובלות בישראל"
            : "Профессиональные услуги по переездам и грузоперевозкам в Израиле",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": reviewsData.length.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviewsData.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "datePublished": review.date,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.text,
            "itemReviewed": {
                "@type": "Service",
                "name": review.service
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
}

export const Reviews = ({ lang, translations }: ReviewsProps) => {
    const [currentReview, setCurrentReview] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const reviewsData = getReviewsData(lang);
    const companyStats = getCompanyStats(lang);
    const t = translations.reviews;

    const nextReview = () => {
        setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
    };

    const formatDisplayDate = (dateString: string) => {
        const locale = lang === 'he' ? 'he-IL' : 'ru-RU';
        return new Date(dateString).toLocaleDateString(locale);
    };

    const getAltText = (name: string) => {
        return lang === 'he' ? `אווטר ${name}` : `Аватар ${name}`;
    };

    const handlePhoneSubmit = async () => {
        if (!phoneNumber.trim()) {
            message.error(lang === 'he' ? 'נא להזין מספר טלפון' : 'Пожалуйста, введите номер телефона');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/send-phone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: phoneNumber,
                    source: 'reviews_section',
                    lang: lang,
                    timestamp: new Date().toISOString()
                }),
            });

            const result = await response.json();

            if (result.success) {
                message.success(lang === 'he' ? 'הטלפון נשלח בהצלחה! נחזור אליך בהקדם' : 'Номер отправлен! Мы свяжемся с вами в ближайшее время');
                setPhoneNumber('');
            } else {
                message.error(lang === 'he' ? 'שגיאה בשליחת הטלפון' : 'Ошибка при отправке номера');
            }
        } catch (error) {
            console.error('Error sending phone:', error);
            message.error(lang === 'he' ? 'שגיאת רשת' : 'Ошибка сети');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handlePhoneSubmit();
        }
    };

    return (
        <section className={styles.section} id="reviews" itemScope itemType="https://schema.org/Product">
            <ReviewsStructuredData
                lang={lang}
                reviewsData={reviewsData}
                companyName={translations.header.companyName}
            />

            <div className={styles.container}>
                <h2 className={styles.title} itemProp="name">{t.title}</h2>
                <p className={styles.subtitle}>{t.subtitle}</p>

                <Row gutter={[60, 40]}>
                    <Col xs={24} lg={10}>
                        <div className={styles.phoneContainer}>
                            <div className={styles.phone}>
                                <div className={styles.phoneScreen}>
                                    <article className={styles.reviewContent} itemScope
                                             itemType="https://schema.org/Review">
                                        <div className={styles.reviewHeader}>
                                            <Avatar
                                                size={60}
                                                icon={<UserOutlined/>}
                                                className={styles.avatar}
                                                alt={getAltText(reviewsData[currentReview].name)}
                                            />
                                            <div className={styles.userInfo}>
                                                <h3 className={styles.userName}
                                                    itemProp="author">{reviewsData[currentReview].name}</h3>
                                                <div className={styles.userDetails}>
                                                    <span className={styles.location}>
                                                        <EnvironmentOutlined/>
                                                        {reviewsData[currentReview].location}
                                                    </span>
                                                    <time className={styles.date}
                                                          dateTime={reviewsData[currentReview].date}>
                                                        <CalendarOutlined/>
                                                        {formatDisplayDate(reviewsData[currentReview].date)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.rating} itemProp="reviewRating" itemScope
                                             itemType="https://schema.org/Rating">
                                            <meta itemProp="ratingValue"
                                                  content={reviewsData[currentReview].rating.toString()}/>
                                            <meta itemProp="bestRating" content="5"/>
                                            <Rate
                                                disabled
                                                value={reviewsData[currentReview].rating}
                                                character={<StarFilled/>}
                                                className={styles.stars}
                                            />
                                            <span className={styles.ratingText}>
                                                {reviewsData[currentReview].rating}.0 {t.labels.rating}
                                            </span>
                                        </div>

                                        <p className={styles.reviewText} itemProp="reviewBody">
                                            {`"${reviewsData[currentReview].text}"`}
                                        </p>

                                        <div className={styles.serviceBadge}>
                                            {t.labels.service} <span>{reviewsData[currentReview].service}</span>
                                        </div>

                                        <div className={styles.navigation}>
                                            <button
                                                className={styles.navButton}
                                                onClick={prevReview}
                                                aria-label={t.navigation.prev}
                                            >
                                                {lang === 'he' ? '→' : '←'}
                                            </button>
                                            <div className={styles.dots}>
                                                {reviewsData.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        className={`${styles.dot} ${index === currentReview ? styles.activeDot : ''}`}
                                                        onClick={() => setCurrentReview(index)}
                                                        aria-label={`${t.navigation.goToReview} ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                            <button
                                                className={styles.navButton}
                                                onClick={nextReview}
                                                aria-label={t.navigation.next}
                                            >
                                                {lang === 'he' ? '←' : '→'}
                                            </button>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} lg={14}>
                        <div className={styles.companyInfo}>
                            <h3 className={styles.companyTitle}>{t.companyTitle}</h3>

                            <div className={styles.companyDescription}>
                                <p dangerouslySetInnerHTML={{ __html: t.companyDescription.part1 }} />
                                <p>{t.companyDescription.part2}</p>
                            </div>

                            <div className={styles.statsGrid}>
                                {companyStats.map((stat, index) => (
                                    <div key={index} className={styles.statItem}>
                                        <div className={styles.statIcon}>{stat.icon}</div>
                                        <div className={styles.statContent}>
                                            <div className={styles.statNumber}>{stat.number}</div>
                                            <div className={styles.statText}>{stat.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.seoReviews} aria-hidden="true">
                                {reviewsData.map((review, index) => (
                                    <div key={review.id} itemScope itemType="https://schema.org/Review">
                                        <meta itemProp="author" content={review.name}/>
                                        <meta itemProp="datePublished" content={review.date}/>
                                        <meta itemProp="reviewRating" content={review.rating.toString()}/>
                                        <meta itemProp="reviewBody" content={review.text}/>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.ctaBlock}>
                                <h4>{t.cta.title}</h4>
                                <p>{t.cta.description}</p>

                                <div className={styles.phoneInputContainer}>
                                    <Input
                                        placeholder={lang === 'he' ? 'הזן מספר טלפון' : 'Введите номер телефона'}
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        size="large"
                                        className={styles.phoneInput}
                                        type="tel"
                                    />
                                    <Button
                                        type="primary"
                                        icon={<SendOutlined />}
                                        loading={isLoading}
                                        onClick={handlePhoneSubmit}
                                        className={styles.sendButton}
                                        size="large"
                                    >
                                        {lang === 'he' ? 'שלח' : 'Отправить'}
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};
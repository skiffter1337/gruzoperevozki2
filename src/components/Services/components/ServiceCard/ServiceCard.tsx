"use client"
import { Card } from "antd";
import styles from "@/components/Services/Services.module.scss";
import {Service, ServicesTranslations} from "@/components/Services/model/types";
import { useState, useRef, useEffect, TouchEvent } from "react";

interface ServiceCardProps {
    service: Service;
    lang: 'ru' | 'he' | 'en';
    translations: {
        services: ServicesTranslations;
        header: {
            companyName: string;
        };
    };
}

export const ServiceCard = ({ service, lang, translations }: ServiceCardProps) => {
    const t = translations.services;
    const companyName = translations.header.companyName;
    const [currentPriceIndex, setCurrentPriceIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": companyName
        },
        "areaServed": "IL"
    };

    const getRoomLabel = (roomCount: number): string => {
        if (lang === 'he') {
            return roomCount === 1 ? t.labels.rooms : t.labels.rooms_plural;
        } else {
            if (roomCount === 1) return t.labels.rooms;
            if (roomCount >= 2 && roomCount <= 4) return t.labels.rooms_plural;
            return t.labels.rooms_plural;
        }
    };

    const formatPrice = (price: string): string => {
        return price;
    };

    const hasPrices = (service: Service): service is Service & { prices: NonNullable<Service['prices']> } => {
        return service.hasPriceSlider && !!service.prices;
    };

    const hasFixedPrice = (service: Service): service is Service & { price: string } => {
        return !service.hasPriceSlider && !!service.price;
    };

    const handleTouchStart = (e: TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (!isDragging) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        const threshold = 50;

        if (Math.abs(diff) > threshold && hasPrices(service)) {
            if (diff > 0) {
                setCurrentPriceIndex(prev =>
                    prev < service.prices.length - 1 ? prev + 1 : 0
                );
            } else {
                setCurrentPriceIndex(prev =>
                    prev > 0 ? prev - 1 : service.prices.length - 1
                );
            }
        }

        setIsDragging(false);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const endX = e.clientX;
        const diff = startX - endX;
        const threshold = 50;

        if (Math.abs(diff) > threshold && hasPrices(service)) {
            if (diff > 0) {
                setCurrentPriceIndex(prev =>
                    prev < service.prices.length - 1 ? prev + 1 : 0
                );
            } else {
                setCurrentPriceIndex(prev =>
                    prev > 0 ? prev - 1 : service.prices.length - 1
                );
            }
        }

        setIsDragging(false);
    };

    useEffect(() => {
        if (!hasPrices(service) || service.prices.length <= 1) return;

        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentPriceIndex(prev =>
                    prev < service.prices.length - 1 ? prev + 1 : 0
                );
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [service, isDragging]);

    const getIndicatorLabel = (index: number) => {
        switch (lang) {
            case 'he':
                return `עבור לשקופית ${index + 1}`;
            case 'en':
                return `Go to slide ${index + 1}`;
            case 'ru':
            default:
                return `Перейти к слайду ${index + 1}`;
        }
    };

    return (
        <article className={styles.cardWrapper} itemScope itemType="https://schema.org/Service">
            <Card className={styles.card}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />

                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                        {service.icon}
                    </div>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>

                <ul className={styles.featuresList}>
                    {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className={styles.featureItem}>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className={styles.pricing}>
                    {hasPrices(service) ? (
                        <div className={styles.priceSlider}>
                            <span className={styles.priceLabel}>{t.labels.prices}</span>

                            <div dir="ltr" className={styles.sliderWrapper}>
                                <div
                                    className={styles.sliderContainer}
                                    ref={sliderRef}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                >
                                    <div className={styles.sliderTrack}>
                                        <div
                                            className={styles.sliderItems}
                                            style={{
                                                transform: `translateX(-${currentPriceIndex * 100}%)`,
                                                transition: isDragging ? 'none' : 'transform 0.3s ease'
                                            }}
                                        >
                                            {service.prices.map((price, index: number) => (
                                                <div
                                                    key={index}
                                                    className={styles.sliderItem}
                                                >
                                                    <div className={styles.sliderContent}>
                                                        <span className={styles.roomCount}>
                                                            {price.rooms} {getRoomLabel(price.rooms)}
                                                        </span>
                                                        <strong className={styles.priceValue}>
                                                            {formatPrice(price.price)}
                                                        </strong>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Индикаторы */}
                                {service.prices.length > 1 && (
                                    <div className={styles.sliderIndicators}>
                                        {service.prices.map((_, index: number) => (
                                            <button
                                                key={index}
                                                className={`${styles.indicator} ${
                                                    index === currentPriceIndex ? styles.active : ''
                                                }`}
                                                onClick={() => setCurrentPriceIndex(index)}
                                                aria-label={getIndicatorLabel(index)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Скрытый список для SEO */}
                            <div className={styles.seoPriceList} aria-hidden="true">
                                {service.prices.map((price, index: number) => (
                                    <div key={index} className={styles.seoPriceItem}>
                                        {price.rooms} {getRoomLabel(price.rooms)}: {formatPrice(price.price)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : hasFixedPrice(service) ? (
                        <div className={styles.fixedPrice}>
                            <strong className={styles.priceValue}>{formatPrice(service.price)}</strong>
                        </div>
                    ) : null}
                </div>
            </Card>
        </article>
    );
};
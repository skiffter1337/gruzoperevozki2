"use client"
import { Card } from "antd";
import styles from "@/components/Services/Services.module.scss";
import {Service, ServicesTranslations} from "@/components/Services/model/types";

interface ServiceCardProps {
    service: Service;
    lang: 'ru' | 'he';
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
                        <div className={styles.priceList}>
                            <span className={styles.priceLabel}>{t.labels.prices}</span>
                            {service.prices.map((price, index: number) => (
                                <div key={index} className={styles.priceItem}>
                                    <span>
                                        {price.rooms} {getRoomLabel(price.rooms)}:
                                    </span>
                                    <strong>{formatPrice(price.price)}</strong>
                                </div>
                            ))}
                        </div>
                    ) : hasFixedPrice(service) ? (
                        <div className={styles.fixedPrice}>
                            <strong>{formatPrice(service.price)}</strong>
                        </div>
                    ) : null}
                </div>
            </Card>
        </article>
    );
};
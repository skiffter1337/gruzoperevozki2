import {useEffect, useState} from "react";
import {Button, Card} from "antd";
import styles from "@/components/Services/Services.module.scss";

export const ServiceCard = ({ service }: { service: any }) => {
    const [currentPriceIndex, setCurrentPriceIndex] = useState(0);

    useEffect(() => {
        if (service.hasPriceSlider && service.prices) {
            const interval = setInterval(() => {
                setCurrentPriceIndex((prev) =>
                    prev === service.prices.length - 1 ? 0 : prev + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [service.hasPriceSlider, service.prices]);

    const currentPrice = service.hasPriceSlider
        ? service.prices[currentPriceIndex]
        : null;

    return (
        <Card className={styles.card}>
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

            {service.hasPriceSlider && service.prices && (
                <div className={styles.priceSlider}>
                    <div className={styles.priceDisplay}>
                        <span className={styles.priceLabel}>от</span>
                        <span className={styles.priceValue}>{currentPrice?.price}</span>
                        <span className={styles.roomsLabel}>
              за {currentPrice?.rooms} {currentPrice?.rooms === 1 ? 'комнату' :
                            currentPrice?.rooms === 2 ? 'комнаты' : 'комнат'}
            </span>
                    </div>
                    <div className={styles.priceDots}>
                        {service.prices.map((_: any, index: number) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${index === currentPriceIndex ? styles.activeDot : ''}`}
                                onClick={() => setCurrentPriceIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {!service.hasPriceSlider && service.price && (
                <div className={styles.fixedPrice}>
                    <span className={styles.priceValue}>{service.price}</span>
                </div>
            )}
        </Card>
    );
};
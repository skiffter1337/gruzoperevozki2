"use client"
import {Card, Col, Row} from 'antd';
import styles from './Vehicles.module.scss';
import {FC, useEffect, useState, useRef, useCallback} from "react";
import {Vehicle, VehiclesTranslations} from "@/components/Vehicles/model/types";
import {getVehiclesData} from "@/components/Vehicles/model/helpers";

interface VehiclesProps {
    lang: 'ru' | 'he' | 'en';
    translations: {
        vehicles: VehiclesTranslations;
        header: {
            companyName: string;
        };
    };
}

function VehiclesStructuredData({
                                    lang,
                                    vehiclesData,
                                    companyName
                                }: {
    lang: string;
    vehiclesData: Vehicle[];
    companyName: string;
}) {

    const getDescription = () => {
        switch (lang) {
            case 'he':
                return "צי מקצועי של רכבי משא עם יכולות נשיאה שונות למעבר דירה בישראל";
            case 'en':
                return "Professional fleet of cargo vehicles with different load capacities for relocation in Israel";
            case 'ru':
            default:
                return "Профессиональный автопарк грузовых автомобилей различной грузоподъемности для переездов в Израиле";
        }
    };

    const getCapacityValue = (capacity: string) => {
        switch (lang) {
            case 'he':
                return capacity.replace('עד ', '');
            case 'en':
                return capacity.replace('up to ', '');
            case 'ru':
            default:
                return capacity.replace('до ', '');
        }
    };

    const getVolumeValue = (volume: string) => {
        switch (lang) {
            case 'he':
                return volume.replace(' מ"ק', '');
            case 'en':
                return volume.replace(' m³', '');
            case 'ru':
            default:
                return volume.replace(' м³', '');
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": companyName,
        "description": getDescription(),
        "numberOfItems": vehiclesData.length,
        "itemListElement": vehiclesData.map((vehicle, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": vehicle.name,
                "description": vehicle.description,
                "vehicleType": vehicle.type,
                "weight": {
                    "@type": "QuantitativeValue",
                    "value": getCapacityValue(vehicle.capacity),
                    "unitCode": "TON"
                },
                "volume": {
                    "@type": "QuantitativeValue",
                    "value": getVolumeValue(vehicle.volume),
                    "unitCode": "MTQ"
                }
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

export const Vehicles: FC<VehiclesProps> = ({lang, translations}) => {
    const vehiclesData = getVehiclesData(lang);
    const t = translations.vehicles;
    const companyName = translations.header.companyName;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const isHebrew = lang === "he";

    useEffect(() => {
        if (!isAutoPlaying || isDragging) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % vehiclesData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [vehiclesData.length, isAutoPlaying, isDragging]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const nextSlide = useCallback(() => {
        goToSlide((currentSlide + 1) % vehiclesData.length);
    }, [currentSlide, vehiclesData.length, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((currentSlide - 1 + vehiclesData.length) % vehiclesData.length);
    }, [currentSlide, vehiclesData.length, goToSlide]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setCurrentX(e.touches[0].clientX);
        setIsAutoPlaying(false);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!isDragging) return;
        setCurrentX(e.touches[0].clientX);
    }, [isDragging]);

    const handleTouchEnd = useCallback(() => {
        if (!isDragging) return;

        const diff = startX - currentX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setIsDragging(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, [isDragging, startX, currentX, nextSlide, prevSlide]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setCurrentX(e.clientX);
        setIsAutoPlaying(false);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging) return;
        setCurrentX(e.clientX);
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        if (!isDragging) return;

        const diff = startX - currentX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        setIsDragging(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, [isDragging, startX, currentX, nextSlide, prevSlide]);

    const getAltText = (vehicle: Vehicle) => {
        switch (lang) {
            case 'he':
                return `${vehicle.name} - ${vehicle.capacity} יכולת נשיאה`;
            case 'en':
                return `${vehicle.name} - ${vehicle.capacity} load capacity`;
            case 'ru':
            default:
                return `${vehicle.name} - ${vehicle.capacity} грузоподъемность`;
        }
    };

    const getTitleText = (vehicle: Vehicle) => {
        switch (lang) {
            case 'he':
                return `השכרת ${vehicle.name} למעברים`;
            case 'en':
                return `${vehicle.name} rental for moves`;
            case 'ru':
            default:
                return `Аренда ${vehicle.name} для переездов`;
        }
    };

    const getDotLabel = (index: number) => {
        switch (lang) {
            case 'he':
                return `עבור לרכב ${index + 1}`;
            case 'en':
                return `Go to vehicle ${index + 1}`;
            case 'ru':
            default:
                return `Перейти к транспорту ${index + 1}`;
        }
    };

    const getCategory = () => {
        switch (lang) {
            case 'he':
                return "הובלות";
            case 'en':
                return "Transportation";
            case 'ru':
            default:
                return "Грузоперевозки";
        }
    };

    const getServiceType = () => {
        switch (lang) {
            case 'he':
                return "השכרת רכבי משא";
            case 'en':
                return "Cargo vehicle rental";
            case 'ru':
            default:
                return "Аренда грузового транспорта";
        }
    };

    const renderVehicleCard = (vehicle: Vehicle, index: number) => (
        <article
            className={styles.cardWrapper}
            itemScope
            itemType="https://schema.org/Product"
            key={vehicle.id}
        >
            <Card
                className={styles.card}
                cover={
                    <div className={styles.imageContainer}>
                        <div className={styles.placeholderImage}>
                            <img
                                src={vehicle.image}
                                alt={getAltText(vehicle)}
                                title={getTitleText(vehicle)}
                                loading="lazy"
                                itemProp="image"
                            />
                        </div>
                    </div>
                }
            >
                <div className={styles.cardContent}>
                    <h3 className={styles.vehicleName} itemProp="name">
                        {vehicle.name}
                    </h3>
                    <p className={styles.vehicleDescription} itemProp="description">
                        {vehicle.description}
                    </p>

                    <div className={styles.specs} itemScope itemType="https://schema.org/QuantitativeValue">
                        <div className={styles.specItem}>
                            <strong>{t.labels.capacity}</strong>
                            <span itemProp="weight">{vehicle.capacity}</span>
                        </div>
                        <div className={styles.specItem}>
                            <strong>{t.labels.volume}</strong>
                            <span itemProp="volume">{vehicle.volume}</span>
                        </div>
                        <div className={styles.specItem}>
                            <strong>{t.labels.type}</strong>
                            <span itemProp="vehicleType">{vehicle.type}</span>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <strong>{t.labels.features}</strong>
                        <ul className={styles.featuresList}>
                            {vehicle.features.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <meta itemProp="category" content={getCategory()}/>
                    <meta itemProp="areaServed" content="IL"/>
                    <meta itemProp="serviceType" content={getServiceType()}/>
                </div>
            </Card>
        </article>
    );

    return (
        <section className={styles.vehicles} id="vehicles" itemScope itemType="https://schema.org/ItemList">
            <VehiclesStructuredData
                lang={lang}
                vehiclesData={vehiclesData}
                companyName={companyName}
            />

            <div className={styles.container}>
                <h2 className={styles.title} itemProp="name">
                    {t.title}
                </h2>
                <p className={styles.subtitle}>
                    {t.subtitle}
                </p>

                {/* Десктопная версия */}
                <div className={`${styles.desktopVersion} ${isHebrew && styles.rtl}`} >
                    <Row gutter={[30, 30]}>
                        {vehiclesData.map((vehicle) => (
                            <Col xs={24} md={12} lg={8} key={vehicle.id}>
                                {renderVehicleCard(vehicle, 0)}
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Мобильная версия - слайдер */}
                <div className={styles.mobileSlider}>
                    <div className={styles.sliderWrapper}>
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
                            <div
                                className={styles.sliderTrack}
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    transition: isDragging ? 'none' : 'transform 0.3s ease'
                                }}
                            >
                                {vehiclesData.map((vehicle, index) => (
                                    <div key={vehicle.id} className={`${styles.slide} ${isHebrew && styles.rtl}`}>
                                        {renderVehicleCard(vehicle, index)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderControls}>

                        <div className={styles.dots}>
                            {vehiclesData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={getDotLabel(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Дополнительный SEO контент */}
                <div className={styles.seoContent} aria-hidden="true">
                    <p dangerouslySetInnerHTML={{__html: t.seoContent.paragraph}}/>
                    <ul>
                        {t.seoContent.listItems.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
import {Card, Col, Row} from 'antd';
import styles from './Vehicles.module.scss';
import {FC} from "react";
import {Vehicle, VehiclesTranslations} from "@/components/Vehicles/model/types";
import {getVehiclesData} from "@/components/Vehicles/model/helpers";

interface VehiclesProps {
    lang: 'ru' | 'he';
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
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": companyName,
        "description": lang === 'he'
            ? "צי מקצועי של רכבי משא עם יכולות נשיאה שונות למעבר דירה בישראל"
            : "Профессиональный автопарк грузовых автомобилей различной грузоподъемности для переездов в Израиле",
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
                    "value": vehicle.capacity.replace(lang === 'he' ? 'עד ' : 'до ', ''),
                    "unitCode": "TON"
                },
                "volume": {
                    "@type": "QuantitativeValue",
                    "value": vehicle.volume.replace(lang === 'he' ? ' מ"ק' : ' м³', ''),
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

    const getAltText = (vehicle: Vehicle) => {
        return lang === 'he'
            ? `${vehicle.name} - ${vehicle.capacity} יכולת נשיאה`
            : `${vehicle.name} - ${vehicle.capacity} грузоподъемность`;
    };

    const getTitleText = (vehicle: Vehicle) => {
        return lang === 'he'
            ? `השכרת ${vehicle.name} למעברים`
            : `Аренда ${vehicle.name} для переездов`;
    };

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

                <Row gutter={[30, 30]}>
                    {vehiclesData.map((vehicle) => (
                        <Col xs={24} md={12} lg={8} key={vehicle.id}>
                            <article className={styles.cardWrapper} itemScope itemType="https://schema.org/Product">
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

                                        <div className={styles.specs} itemScope
                                             itemType="https://schema.org/QuantitativeValue">
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

                                        {/* Скрытые микроразметки для SEO */}
                                        <meta itemProp="category"
                                              content={lang === 'he' ? "הובלות" : "Грузоперевозки"}/>
                                        <meta itemProp="areaServed" content="IL"/>
                                        <meta itemProp="serviceType"
                                              content={lang === 'he' ? "השכרת רכבי משא" : "Аренда грузового транспорта"}/>
                                    </div>
                                </Card>
                            </article>
                        </Col>
                    ))}
                </Row>

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
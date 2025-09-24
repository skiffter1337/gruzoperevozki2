import {Card, Col, Row} from 'antd';
import styles from './Advantages.module.scss';
import {getAdvantagesData} from "@/components/Advantages/model/helpers";
import {AdvantagesTranslations} from "@/components/Advantages/model/types";

interface AdvantagesProps {
    lang: 'ru' | 'he';
    translations: {
        advantages: AdvantagesTranslations;
        header: {
            companyName: string;
        };
    };
}

function AdvantagesStructuredData({lang, companyName}: { lang: string; companyName: string }) {
    const advantagesData = getAdvantagesData(lang as 'ru' | 'he');

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": lang === 'he' ? "שירותי הובלות גרוזוביצ'וק" : "Услуги грузоперевозок UrbanMoving",
        "description": lang === 'he'
            ? "שירותים מקצועיים למעבר עם יתרונות: תמיכה 24/7, ביטוח מטען, תשלום גמיש"
            : "Профессиональные услуги по переездам с преимуществами: круглосуточная поддержка, страхование груза, гибкая оплата",
        "provider": {
            "@type": "LocalBusiness",
            "name": companyName,
            "description": lang === 'he' ? "הובלות מקצועיות בישראל" : "Профессиональные грузоперевозки в Израиле",
            "areaServed": "IL",
            "serviceType": lang === 'he' ? "הובלות ומעבר דירה" : "Грузоперевозки и переезды"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": lang === 'he' ? "יתרונות השירותים שלנו" : "Преимущества наших услуг",
            "itemListElement": advantagesData.map((advantage, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": advantage.schemaType,
                    "name": advantage.title,
                    "description": advantage.description
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
}

const Advantages = ({lang, translations}: AdvantagesProps) => {
    const advantagesData = getAdvantagesData(lang);
    const t = translations.advantages;

    return (
        <section className={styles.advantages} id="advantages" itemScope itemType="https://schema.org/Service">
            <AdvantagesStructuredData lang={lang} companyName={translations.header.companyName}/>

            <div className={styles.container}>
                <h2 className={styles.title} itemProp="name">
                    {t.title}
                </h2>
                <p className={styles.subtitle}>
                    {t.subtitle}
                </p>

                <Row gutter={[30, 30]}>
                    {advantagesData.map((advantage, index) => (
                        <Col xs={24} md={8} key={index}>
                            <article className={styles.cardWrapper} itemScope
                                     itemType={`https://schema.org/${advantage.schemaType}`}>
                                <Card className={styles.card}>
                                    <div className={styles.icon} itemProp="image">
                                        {advantage.icon}
                                    </div>
                                    <h3 className={styles.cardTitle} itemProp="name">
                                        {advantage.title}
                                    </h3>
                                    <p className={styles.description} itemProp="description">
                                        {advantage.description}
                                    </p>

                                    {/* Скрытые микроразметки для SEO */}
                                    <meta itemProp="provider" content={translations.header.companyName}/>
                                    <meta itemProp="areaServed" content="IL"/>
                                </Card>
                            </article>
                        </Col>
                    ))}
                </Row>

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

export default Advantages;
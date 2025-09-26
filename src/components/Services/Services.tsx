import {Col, Row} from 'antd';
import styles from './Services.module.scss';
import {ServiceCard} from "@/components/Services/components/ServiceCard/ServiceCard";
import {FC} from "react";
import {Service, ServicesTranslations} from "@/components/Services/model/types";
import {getServicesData} from "@/components/Services/model/helpers";

interface ServicesProps {
    lang: 'ru' | 'he';
    translations: {
        services: ServicesTranslations;
        header: {
            companyName: string;
        };
    };
}

export const Services: FC<ServicesProps> = ({lang, translations}) => {
    const servicesData: Service[] = getServicesData(lang);
    const t = translations.services;

    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
                <Row gutter={[30, 30]}>
                    {servicesData.map((service: Service) => (
                        <Col xs={24} md={12} lg={8} key={service.id}>
                            <ServiceCard
                                service={service}
                                lang={lang}
                                translations={translations}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}
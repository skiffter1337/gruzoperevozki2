'use client'

import {Card, Row, Col} from 'antd'
import styles from './Services.module.scss'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

interface ServicesProps {
    lang: string
}

export function Services({lang}: ServicesProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const services = [
        {key: 'apartment', icon: '🏢'},
        {key: 'office', icon: '💼'},
        {key: 'house', icon: '🏠'},
        {key: 'furniture', icon: '🛋️'},
        {key: 'storage', icon: '📦'}
    ]

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.services.title}</h2>

                <Row gutter={[24, 24]}>
                    {services.map((service) => (
                        <Col xs={24} sm={12} lg={8} key={service.key}>
                            <Card className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h3 className={styles.serviceTitle}>
                                    {t.services.items[service.key as keyof typeof t.services.items]}
                                </h3>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}
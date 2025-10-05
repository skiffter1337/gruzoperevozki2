'use client'

import {Card, Row, Col, Collapse} from 'antd'
import styles from './About.module.scss'
import {useTranslation} from "@/hooks/use-translation";

type Language = 'ru' | 'he' | 'en'

interface AboutProps {
    lang: string
}

export function About({lang}: AboutProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)

    const getLocalizedText = (ruText: string, heText: string, enText: string): string => {
        switch (language) {
            case 'ru':
                return ruText
            case 'he':
                return heText
            case 'en':
                return enText
            default:
                return enText
        }
    }

    const features = [
        {key: 'experience', icon: '⏱️', title: t.about.features.experience},
        {key: 'team', icon: '👥', title: t.about.features.team},
        {key: 'insurance', icon: '🛡️', title: t.about.features.insurance},
        {key: 'support', icon: '📞', title: t.about.features.support}
    ]

    const renderFleetContent = () => (
        <div className={styles.panelContent}>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <div className={styles.fleetItem}>
                        <span className={styles.fleetIcon}>🚛</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Крупногабаритные перевозки',
                                'הובלות גדולות',
                                'Large-scale transport'
                            )}</h4>
                            <p>{t.about.fleet.large}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.fleetItem}>
                        <span className={styles.fleetIcon}>🚚</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Средние перевозки',
                                'הובלות בינוניות',
                                'Medium transport'
                            )}</h4>
                            <p>{t.about.fleet.medium}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.fleetItem}>
                        <span className={styles.fleetIcon}>🚐</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Быстрые доставки',
                                'משלוחים מהירים',
                                'Quick deliveries'
                            )}</h4>
                            <p>{t.about.fleet.small}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.fleetItem}>
                        <span className={styles.fleetIcon}>🏗️</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Спецтехника',
                                'ציוד מיוחד',
                                'Special equipment'
                            )}</h4>
                            <p>{t.about.fleet.special}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )

    const renderServicesContent = () => (
        <div className={styles.panelContent}>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <div className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>⚡</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Крановые услуги',
                                'שירותי מנוף',
                                'Crane services'
                            )}</h4>
                            <p>{t.about.services.crane}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🔨</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Плотницкие работы',
                                'עבודות נגרות',
                                'Carpentry work'
                            )}</h4>
                            <p>{t.about.services.carpentry}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>📦</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Упаковка',
                                'אריזה',
                                'Packing'
                            )}</h4>
                            <p>{t.about.services.packing}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={styles.serviceItem}>
                        <span className={styles.serviceIcon}>🏪</span>
                        <div>
                            <h4>{getLocalizedText(
                                'Хранение',
                                'אחסון',
                                'Storage'
                            )}</h4>
                            <p>{t.about.services.storage}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )

    const renderTeamContent = () => (
        <div className={styles.panelContent}>
            <div className={styles.teamSection}>
                <div className={styles.teamIcon}>👨‍💼👩‍💼</div>
                <p>{t.about.team.description}</p>
                <div className={styles.teamStats}>
                    <div className={styles.stat}>
                        <strong>8+</strong>
                        <span>{getLocalizedText('Специалистов', 'מומחים', 'Specialists')}</span>
                    </div>
                    <div className={styles.stat}>
                        <strong>5+</strong>
                        <span>{getLocalizedText('Лет опыта', 'שנות ניסיון', 'Years of experience')}</span>
                    </div>
                    <div className={styles.stat}>
                        <strong>1000+</strong>
                        <span>{getLocalizedText('Успешных переездов', 'מעברים מוצלחים', 'Successful moves')}</span>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderDifferenceContent = () => (
        <div className={styles.panelContent}>
            <div className={styles.differenceSection}>
                <div className={styles.differenceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                        <h4>{getLocalizedText('Индивидуальный подход', 'גישה אישית', 'Individual approach')}</h4>
                        <p>{getLocalizedText(
                            'Каждый клиент получает персональное внимание и решение, tailored под его конкретные потребности',
                            'כל לקוח מקבל תשומת לב אישית ופתרון המותאם לצרכיו הספציפיים',
                            'Each client receives personal attention and solutions tailored to their specific needs'
                        )}</p>
                    </div>
                </div>
                <div className={styles.differenceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                        <h4>{getLocalizedText('Профессионализм', 'מקצועיות', 'Professionalism')}</h4>
                        <p>{getLocalizedText(
                            'Все наши сотрудники проходят строгий отбор и постоянное обучение',
                            'כל העובדים שלנו עוברים בחירה קפדנית והכשרה מתמדת',
                            'All our employees undergo strict selection and ongoing training'
                        )}</p>
                    </div>
                </div>
                <div className={styles.differenceItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                        <h4>{getLocalizedText('Надежность', 'אמינות', 'Reliability')}</h4>
                        <p>{getLocalizedText(
                            'Строгое соблюдение сроков и полная сохранность вашего имущества',
                            'עמידה קפדנית בלוחות זמנים ושמירה מלאה על הרכוש שלך',
                            'Strict adherence to deadlines and complete safety of your property'
                        )}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderCoverageContent = () => (
        <div className={styles.panelContent}>
            <div className={styles.coverageSection}>
                <div className={styles.coverageMap}>
                    <div className={styles.mapPlaceholder}>
                        <span>🗺️</span>
                        <p>{getLocalizedText('Вся территория Израиля', 'כל שטח ישראל', 'All territory of Israel')}</p>
                    </div>
                </div>
                <div className={styles.coverageList}>
                    <h4>{getLocalizedText('Основные города:', 'ערים עיקריות:', 'Main cities:')}</h4>
                    <Row gutter={[16, 8]}>
                        <Col xs={12} md={8}>
                            <span
                                className={styles.city}>• {getLocalizedText('Тель-Авив', 'תל אביב', 'Tel Aviv')}</span>
                        </Col>
                        <Col xs={12} md={8}>
                            <span
                                className={styles.city}>• {getLocalizedText('Иерусалим', 'ירושלים', 'Jerusalem')}</span>
                        </Col>
                        <Col xs={12} md={8}>
                            <span className={styles.city}>• {getLocalizedText('Хайфа', 'חיפה', 'Haifa')}</span>
                        </Col>
                        <Col xs={12} md={8}>
                            <span
                                className={styles.city}>• {getLocalizedText('Беэр-Шева', 'באר שבע', 'Beer Sheva')}</span>
                        </Col>
                        <Col xs={12} md={8}>
                            <span className={styles.city}>• {getLocalizedText('Нетания', 'נתניה', 'Netanya')}</span>
                        </Col>
                        <Col xs={12} md={8}>
                            <span className={styles.city}>• {getLocalizedText('Ашдод', 'אשדוד', 'Ashdod')}</span>
                        </Col>
                    </Row>
                </div>
                <p className={styles.coverageDescription}>{t.about.coverage.description}</p>
            </div>
        </div>
    )

    // Элементы аккордеона в новом формате
    const accordionItems = [
        {
            key: 'fleet',
            label: t.about.fleet.title,
            children: renderFleetContent()
        },
        {
            key: 'services',
            label: t.about.services.title,
            children: renderServicesContent()
        },
        {
            key: 'team',
            label: t.about.team.title,
            children: renderTeamContent()
        },
        {
            key: 'difference',
            label: t.about.difference.title,
            children: renderDifferenceContent()
        },
        {
            key: 'coverage',
            label: t.about.coverage.title,
            children: renderCoverageContent()
        }
    ]

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.about.title}</h2>
                <p className={styles.description}>{t.about.description}</p>

                {/* Основное описание */}
                <div className={styles.fullDescription}>
                    <p>{t.about.fullDescription}</p>
                </div>

                {/* Особенности компании */}
                <Row gutter={[24, 24]} className={styles.features}>
                    {features.map((feature) => (
                        <Col xs={24} sm={12} lg={6} key={feature.key}>
                            <Card className={styles.featureCard}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Детальная информация в аккордеоне */}
                <div className={styles.details}>
                    <Collapse
                        ghost
                        size="large"
                        className={styles.accordion}
                        defaultActiveKey={['fleet', 'team']}
                        items={accordionItems}
                    />
                </div>
            </div>
        </section>
    )
}
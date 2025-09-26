"use client"
import {FC, useState} from 'react';
import {Card, Checkbox, Col, DatePicker, Flex, Form, Input, message, Row} from 'antd';
import {CalendarOutlined, EnvironmentOutlined, PhoneOutlined, UserOutlined} from '@ant-design/icons';
import styles from './HeroSection.module.scss';
import Image from "next/image";
import {HeroTranslations, IForm} from "@/components/HeroSection/model/types";

interface HeroSectionProps {
    lang: 'ru' | 'he';
    translations: {
        hero: HeroTranslations;
        header: {
            companyName: string;
        };
    };
}

function HeroStructuredData({
   lang,
   companyName
}: {
    lang: string;
    companyName: string;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyName,
        "description": lang === 'he'
            ? "סבלים מוסמכים למעבר מהיר ובטוח. אריזה, הובלה, הרכבת רהיטים."
            : "Квалифицированные грузчики для быстрого и безопасного переезда. Упаковка, транспортировка, сборка мебели.",
        "url": typeof window !== 'undefined' ? window.location.href : "",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IL",
            "addressLocality": lang === 'he' ? "תל אביב" : "Тель-Авив"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.0853",
            "longitude": "34.7818"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "serviceType": "MovingService",
        "areaServed": lang === 'he' ? "ישראל" : "Израиль",
        "makesOffer": [
            {
                "@type": "Offer",
                "name": lang === 'he' ? "שירותי סבלים" : "Услуги грузчиков",
                "description": lang === 'he' ? "סבלים מקצועיים למעבר דירה" : "Профессиональные грузчики для переездов"
            },
            {
                "@type": "Offer",
                "name": lang === 'he' ? "אריזת מטען" : "Упаковка груза",
                "description": lang === 'he' ? "אריזה איכותית של חפצים למעבר" : "Качественная упаковка вещей для переезда"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "500",
            "bestRating": "5"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
    );
}

export const HeroSection: FC<HeroSectionProps> = ({lang, translations}) => {
    const [form] = Form.useForm();
    const [hasLiftFrom, setHasLiftFrom] = useState(false);
    const [hasLiftTo, setHasLiftTo] = useState(false);
    const t = translations.hero;
    const companyName = translations.header.companyName;

    const onFinish = async (values: IForm) => {
        try {
            console.log('Sending form data:', values);

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (result.success) {
                message.success(lang === 'he' ? 'הבקשה נשלחה בהצלחה!' : 'Заявка успешно отправлена!');
                form.resetFields();
            } else {
                console.error('API error:', result.error);
                message.error(lang === 'he' ? 'שגיאה בשליחת הבקשה' : 'Ошибка при отправке заявки');
            }
        } catch (error) {
            console.error('Network error:', error);
            message.error(lang === 'he' ? 'שגיאת רשת' : 'Ошибка сети');
        }
    };

    const getAltText = () => {
        return lang === 'he'
            ? 'סבלים מקצועיים למעבר דירה בישראל'
            : 'Профессиональные грузчики для переезда в Израиле';
    };

    const startWhatsAppChat = () => {
        // const phone = getWhatsAppPhone();
        // const message = encodeURIComponent(translations.footer.quickContact.whatsappMessage);
        // window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const startPhoneCall = () => {
        // const phoneNumber = footerData.phone;
        // window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <section className={styles.hero} id="hero" itemScope itemType="https://schema.org/LocalBusiness">
            <HeroStructuredData lang={lang} companyName={companyName}/>
            <Flex vertical gap={32}>
            <Flex gap={32} justify="center">
                <button onClick={startWhatsAppChat} className={styles.whatsappButton}>
                    <Image
                        src="/whatsapp.svg"
                        width={48}
                        height={48}
                        alt="WhatsApp"
                        priority={true}
                    />
                </button>
                <button onClick={startPhoneCall} className={styles.phoneButton}>
                    <Image
                        src="/phone.svg"
                        width={26}
                        height={26}
                        alt="Позвонить"
                        priority={true}
                    />
                </button>
            </Flex>
            <div className={styles.container}>
                <Row gutter={[60, 40]} align="middle">
                    <Col xs={24} lg={14}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src="/hero.png"
                                    alt={getAltText()}
                                    className={styles.image}
                                    loading="eager"
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.stats} itemScope
                                         itemType="https://schema.org/AggregateRating">
                                        <meta itemProp="ratingValue" content="4.8"/>
                                        <meta itemProp="ratingCount" content="500"/>
                                        <meta itemProp="bestRating" content="5"/>

                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber} itemProp="reviewCount">740+</span>
                                            <span className={styles.statText}>{t.stats.clients}</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNumber}>1360+</span>
                                            <span className={styles.statText}>{t.stats.moves}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} lg={10}>
                        <Card className={styles.formCard}>
                            <h1 className={styles.formTitle} itemProp="name">
                                {t.title}
                            </h1>

                            <p className={styles.formSubtitle}>
                                {t.subtitle}
                            </p>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                className={styles.form}
                                itemScope
                                itemType="https://schema.org/Service"
                            >
                                <meta itemProp="serviceType" content="MovingService"/>

                                <Flex gap={8} wrap="wrap" className={styles.namePhoneRow}>
                                    <div style={{flex: 1}}>
                                        <Form.Item
                                            name="name"
                                            label={t.form.name.label}
                                            rules={[{required: true, message: t.form.validation.nameRequired}]}
                                        >
                                            <Input
                                                prefix={<UserOutlined/>}
                                                placeholder={t.form.name.placeholder}
                                                size="large"
                                                aria-label={t.form.name.label}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div style={{flex: 1}}>
                                        <Form.Item
                                            name="phone"
                                            label={t.form.phone.label}
                                            rules={[{required: true, message: t.form.validation.phoneRequired}]}
                                        >
                                            <Input
                                                prefix={<PhoneOutlined/>}
                                                placeholder={t.form.phone.placeholder}
                                                size="large"
                                                type="tel"
                                                aria-label={t.form.phone.label}
                                            />
                                        </Form.Item>
                                    </div>
                                </Flex>

                                <div className={styles.addressBlock}>
                                    <h4 className={styles.blockTitle}>
                                        <EnvironmentOutlined/>
                                        {t.form.address.from.title}
                                    </h4>
                                    <Flex vertical gap={16}>
                                        <div className={styles.addressField}>
                                            <Form.Item
                                                name="fromAddress"
                                                label={t.form.address.from.label}
                                                rules={[{required: true, message: t.form.validation.addressRequired}]}
                                            >
                                                <Input
                                                    placeholder={t.form.address.from.placeholder}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </div>
                                        <Flex gap={16} wrap="wrap">
                                            <Form.Item
                                                name="fromFloor"
                                                label={t.form.address.floor}
                                                className={styles.floorInput}
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder={t.form.address.floorPlaceholder}
                                                    size="large"
                                                />
                                            </Form.Item>
                                            <Flex gap={8} vertical>
                                                <div>
                                                    <Form.Item name="fromHasLift" valuePropName="checked">
                                                        <Checkbox onChange={(e) => setHasLiftFrom(e.target.checked)}>
                                                            {t.form.address.hasLift}
                                                        </Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div>
                                                    <Form.Item name="fromNeedCrane" valuePropName="checked">
                                                        <Checkbox>
                                                            {t.form.address.needCrane}
                                                        </Checkbox>
                                                    </Form.Item>
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </div>

                                <div className={styles.addressBlock}>
                                    <h4 className={styles.blockTitle}>
                                        <EnvironmentOutlined/>
                                        {t.form.address.to.title}
                                    </h4>
                                    <Flex vertical gap={16}>
                                        <div className={styles.addressField}>
                                            <Form.Item
                                                name="toAddress"
                                                label={t.form.address.to.label}
                                                rules={[{required: true, message: t.form.validation.addressRequired}]}
                                            >
                                                <Input
                                                    placeholder={t.form.address.to.placeholder}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </div>

                                        <Flex gap={16} wrap="wrap">
                                            <Form.Item
                                                name="toFloor"
                                                label={t.form.address.floor}
                                                className={styles.floorInput}
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder={t.form.address.floorPlaceholder}
                                                    size="large"
                                                />
                                            </Form.Item>
                                            <Flex gap={8} vertical>
                                                <div>
                                                    <Form.Item name="toHasLift" valuePropName="checked">
                                                        <Checkbox onChange={(e) => setHasLiftTo(e.target.checked)}>
                                                            {t.form.address.hasLift}
                                                        </Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div>
                                                    <Form.Item name="toNeedCrane" valuePropName="checked">
                                                        <Checkbox>
                                                            {t.form.address.needCrane}
                                                        </Checkbox>
                                                    </Form.Item>
                                                </div>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </div>

                                <Flex vertical>
                                    <Form.Item
                                        name="date"
                                        label={<span><CalendarOutlined/> {t.form.date.label}</span>}
                                    >
                                        <DatePicker
                                            style={{width: '100%'}}
                                            size="large"
                                            placeholder={t.form.date.placeholder}
                                        />
                                    </Form.Item>

                                    <div className={styles.checkboxGroup}>
                                        <Form.Item name="needPacking" valuePropName="checked">
                                            <Checkbox>
                                                {t.form.services.packing}
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item name="needAssembly" valuePropName="checked">
                                            <Checkbox>
                                                {t.form.services.assembly}
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                </Flex>

                                <Form.Item name="comment" label={t.form.comment.label}>
                                    <Input.TextArea
                                        rows={4}
                                        placeholder={t.form.comment.placeholder}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <button
                                        className={styles.ctaButton}
                                        type="submit"
                                        aria-label={t.form.submit}
                                    >
                                        {t.form.submit}
                                    </button>
                                </Form.Item>

                                <div className={styles.seoText} aria-hidden="true">
                                    <p>{t.seoText}</p>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
            </Flex>
        </section>
    );
};
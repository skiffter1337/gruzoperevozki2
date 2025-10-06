'use client'

import {useState} from 'react'
import {Form, Input, Button, message, Checkbox, DatePicker, Row, Col} from 'antd'
import styles from './Contact.module.scss'
import {useParams} from 'next/navigation'
import {useTranslation} from "@/hooks/use-translation";
type Language = 'ru' | 'he' | 'en'

interface FormValues {
    name: string
    phone: string
    email: string
    fromAddress?: string
    fromFloor?: string
    fromHasLift?: boolean
    fromNeedCrane?: boolean
    toAddress?: string
    toFloor?: string
    toHasLift?: boolean
    toNeedCrane?: boolean
    date?: string
    needPacking?: boolean
    needAssembly?: boolean
    comment?: string
}

export function Contact() {
    const params = useParams()
    const lang = params.lang as Language
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const t = useTranslation(lang)

    const onFinish = async (values: FormValues) => {
        setLoading(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            const result = await response.json()

            if (result.success) {
                message.success(t.contact.successMessage || 'Сообщение отправлено!')
                form.resetFields()
            } else {
                message.error(t.contact.errorMessage || 'Ошибка при отправке')
            }
        } catch (error) {
            console.error('Error sending form:', error)
            message.error(t.contact.errorMessage || 'Ошибка при отправке')
        } finally {
            setLoading(false)
        }
    }

    const getValidationMessages = () => {
        switch (lang) {
            case 'ru':
                return {
                    nameRequired: 'Пожалуйста, введите ваше имя',
                    phoneRequired: 'Пожалуйста, введите ваш телефон',
                    emailRequired: 'Пожалуйста, введите ваш email',
                    emailInvalid: 'Введите корректный email'
                }
            case 'he':
                return {
                    nameRequired: 'אנא הזן את שמך',
                    phoneRequired: 'אנא הזן את מספר הטלפון שלך',
                    emailRequired: 'אנא הזן את הדוא"ל שלך',
                    emailInvalid: 'הזן כתובת דוא"ל תקינה'
                }
            case 'en':
                return {
                    nameRequired: 'Please enter your name',
                    phoneRequired: 'Please enter your phone number',
                    emailRequired: 'Please enter your email',
                    emailInvalid: 'Please enter a valid email'
                }
            default:
                return {
                    nameRequired: 'Please enter your name',
                    phoneRequired: 'Please enter your phone number',
                    emailRequired: 'Please enter your email',
                    emailInvalid: 'Please enter a valid email'
                }
        }
    }

    const validationMessages = getValidationMessages()

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.contact.title}</h2>

                <div className={styles.content}>
                    <Form<FormValues>
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className={styles.form}
                    >
                        <div className={styles.formSection}>
                            <h3 className={styles.sectionTitle}>
                                {lang === 'ru' ? '👤 Контактная информация' :
                                    lang === 'he' ? '👤 פרטי התקשרות' :
                                        '👤 Contact Information'}
                            </h3>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        name="name"
                                        rules={[{required: true, message: validationMessages.nameRequired}]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder={t.contact.name}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        name="phone"
                                        rules={[{required: true, message: validationMessages.phoneRequired}]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder={t.contact.phone}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {required: true, message: validationMessages.emailRequired},
                                            {type: 'email', message: validationMessages.emailInvalid}
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder={t.contact.email}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>

                        <div className={styles.formSection}>
                            <h3 className={styles.sectionTitle}>
                                {lang === 'ru' ? '📍 Адрес отправления' :
                                    lang === 'he' ? '📍 כתובת איסוף' :
                                        '📍 Pickup Address'}
                            </h3>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={12}>
                                    <Form.Item name="fromAddress">
                                        <Input
                                            size="large"
                                            placeholder={
                                                lang === 'ru' ? 'Адрес откуда' :
                                                    lang === 'he' ? 'כתובת איסוף' :
                                                        'From address'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Form.Item name="fromFloor">
                                        <Input
                                            size="large"
                                            placeholder={
                                                lang === 'ru' ? 'Этаж' :
                                                    lang === 'he' ? 'קומה' :
                                                        'Floor'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Form.Item name="fromHasLift" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Есть лифт' :
                                                lang === 'he' ? 'יש מעלית' :
                                                    'Has elevator'}
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item name="fromNeedCrane" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Нужен кран' :
                                                lang === 'he' ? 'צריך מנוף' :
                                                    'Need crane'}
                                        </Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>

                        {/* Адрес назначения */}
                        <div className={styles.formSection}>
                            <h3 className={styles.sectionTitle}>
                                {lang === 'ru' ? '🎯 Адрес назначения' :
                                    lang === 'he' ? '🎯 כתובת יעד' :
                                        '🎯 Destination Address'}
                            </h3>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={12}>
                                    <Form.Item name="toAddress">
                                        <Input
                                            size="large"
                                            placeholder={
                                                lang === 'ru' ? 'Адрес куда' :
                                                    lang === 'he' ? 'כתובת יעד' :
                                                        'To address'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Form.Item name="toFloor">
                                        <Input
                                            size="large"
                                            placeholder={
                                                lang === 'ru' ? 'Этаж' :
                                                    lang === 'he' ? 'קומה' :
                                                        'Floor'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={6}>
                                    <Form.Item name="toHasLift" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Есть лифт' :
                                                lang === 'he' ? 'יש מעלית' :
                                                    'Has elevator'}
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item name="toNeedCrane" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Нужен кран' :
                                                lang === 'he' ? 'צריך מנוף' :
                                                    'Need crane'}
                                        </Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>

                        {/* Дополнительные услуги */}
                        <div className={styles.formSection}>
                            <h3 className={styles.sectionTitle}>
                                {lang === 'ru' ? '📅 Дополнительные услуги' :
                                    lang === 'he' ? '📅 שירותים נוספים' :
                                        '📅 Additional Services'}
                            </h3>
                            <Row gutter={[16, 0]}>
                                <Col xs={24} md={8}>
                                    <Form.Item name="date">
                                        <DatePicker
                                            size="large"
                                            style={{width: '100%'}}
                                            placeholder={
                                                lang === 'ru' ? 'Дата переезда' :
                                                    lang === 'he' ? 'תאריך מעבר' :
                                                        'Moving date'
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item name="needPacking" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Нужна упаковка' :
                                                lang === 'he' ? 'צריך אריזה' :
                                                    'Need packing'}
                                        </Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item name="needAssembly" valuePropName="checked">
                                        <Checkbox>
                                            {lang === 'ru' ? 'Сборка/разборка мебели' :
                                                lang === 'he' ? 'הרכבה/פירוק רהיטים' :
                                                    'Furniture assembly/disassembly'}
                                        </Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>

                        {/* Комментарий */}
                        <div className={styles.formSection}>
                            <Form.Item name="comment">
                                <Input.TextArea
                                    rows={4}
                                    placeholder={t.contact.message}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                loading={loading}
                                className={styles.submitButton}
                            >
                                {t.contact.submit}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    )
}
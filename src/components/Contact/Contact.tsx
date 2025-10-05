'use client'

import {useState} from 'react'
import {Form, Input, Button, message} from 'antd'
import styles from './Contact.module.scss'
import {useTranslation} from "@/hooks/use-translation";

// Определяем возможные значения языка
type Language = 'ru' | 'he' | 'en'

// Тип для значений формы
interface FormValues {
    name: string
    phone: string
    email: string
    message?: string
}

interface ContactProps {
    lang: string
}

export function Contact({lang}: ContactProps) {
    const language = (['ru', 'he', 'en'].includes(lang) ? lang : 'en') as Language
    const t = useTranslation(language)
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onFinish = async (values: FormValues) => {
        setLoading(true)
        try {
            console.log('Form values:', values)
            message.success('Сообщение отправлено!')
            form.resetFields()
        } catch (error) {
            message.error('Ошибка при отправке')
        } finally {
            setLoading(false)
        }
    }

    const getValidationMessages = () => {
        switch (language) {
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
                        <Form.Item
                            name="name"
                            rules={[{required: true, message: validationMessages.nameRequired}]}
                        >
                            <Input
                                size="large"
                                placeholder={t.contact.name}
                            />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[{required: true, message: validationMessages.phoneRequired}]}
                        >
                            <Input
                                size="large"
                                placeholder={t.contact.phone}
                            />
                        </Form.Item>

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

                        <Form.Item name="message">
                            <Input.TextArea
                                rows={4}
                                placeholder={t.contact.message}
                            />
                        </Form.Item>

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
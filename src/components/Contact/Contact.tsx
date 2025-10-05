'use client'

import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import styles from './Contact.module.scss'
import {useTranslation} from "@/hooks/use-translation";

interface ContactProps {
    lang: string
}

export function Contact({ lang }: ContactProps) {
    const t = useTranslation(lang as any)
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onFinish = async (values: any) => {
        setLoading(true)
        try {
            // Здесь будет логика отправки формы
            console.log('Form values:', values)
            message.success('Сообщение отправлено!')
            form.resetFields()
        } catch (error) {
            message.error('Ошибка при отправке')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.contact.title}</h2>

                <div className={styles.content}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className={styles.form}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                        >
                            <Input
                                size="large"
                                placeholder={t.contact.name}
                            />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
                        >
                            <Input
                                size="large"
                                placeholder={t.contact.phone}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Пожалуйста, введите ваш email' },
                                { type: 'email', message: 'Введите корректный email' }
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
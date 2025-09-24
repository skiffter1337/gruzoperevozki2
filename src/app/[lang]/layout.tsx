import type { Metadata } from 'next'
import { ReactNode } from "react";

type Props = {
    children: ReactNode
    params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { lang } = await params;
    const { metadata } = await import(`@/locales/${lang}.json`)

    const isHebrew = lang === 'he'

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            type: 'website',
            locale: isHebrew ? 'he_IL' : 'ru_RU',
        },
        robots: 'index, follow',
        ...(isHebrew && {
            alternates: {
                canonical: 'https://yourdomain.com',  // TODO вставить домен
                languages: {
                    'ru': 'https://yourdomain.com', // TODO вставить домен
                    'he': 'https://yourdomain.com/he',  // TODO вставить домен
                }
            }
        })
    }
}

export default async function LangLayout({
                                             children,
                                             params
                                         }: Props) {

    const { lang } = await params;

    return (
        <div dir={lang === 'he' ? 'rtl' : 'ltr'}>
            {children}
        </div>
    )
}
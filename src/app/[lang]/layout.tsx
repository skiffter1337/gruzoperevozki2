import type {Metadata} from 'next'
import {ReactNode} from "react"
import '../globals.css'
import GoogleAnalytics from "@/analytics/GoogleAnalytics";

type Props = {
    children: ReactNode
    params: Promise<{ lang: string }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const {lang} = await params

    if (lang === 'he') {
        return {
            title: 'גרירה והובלות | Bull Moving',
            description: 'שירותי גרירה והובלות מקצועיים בישראל',
        }
    }

    const {metadata} = await import(`@/locales/${lang}.json`)

    const localeMap: Record<string, string> = {
        'he': 'he_IL',
        'ru': 'ru_RU',
        'en': 'en_US'
    }

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            type: 'website',
            locale: localeMap[lang] || 'en_US',
        },
        robots: 'index, follow',
        alternates: {
            canonical: `https://shor-hovalot.co.il/${lang === 'he' ? '' : lang}`,
            languages: {
                'ru': 'https://shor-hovalot.co.il//ru',
                'he': 'https://shor-hovalot.co.il/',
                'en': 'https://shor-hovalot.co.il/',
            }
        }
    }
}

export default async function LangLayout({
                                             children,
                                             params
                                         }: Props) {
    const {lang} = await params

    const directionMap: Record<string, 'rtl' | 'ltr'> = {
        'he': 'rtl',
        'ru': 'ltr',
        'en': 'ltr'
    }

    const htmlLangMap: Record<string, string> = {
        'he': 'he',
        'ru': 'ru',
        'en': 'en'
    }

    return (
        <div className="layout" lang={htmlLangMap[lang] || 'en'} dir={directionMap[lang] || 'ltr'}>
            {children}
            <GoogleAnalytics/>
        </div>
    )
}
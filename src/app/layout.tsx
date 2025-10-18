import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

type Props = {
    children: ReactNode
    params: Promise<{ lang?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang = 'he' } = await params

    const titles = {
        he: 'גרירה והובלות | Bull Moving',
        ru: 'Грузоперевозки и переезды | Bull Moving',
        en: 'Moving and Transportation | Bull Moving'
    }

    const descriptions = {
        he: 'שירותי גרירה והובלות מקצועיים בישראל',
        ru: 'Профессиональные услуги по переезду и грузоперевозкам в Израиле',
        en: 'Professional moving and transportation services in Israel'
    }

    return {
        title: {
            template: '%s | Bull Moving',
            default: titles[lang as keyof typeof titles] || titles.he,
        },
        description: descriptions[lang as keyof typeof descriptions] || descriptions.he,
        icons: {
            icon: '/favicon.ico',
        },
    }
}

export default async function RootLayout({ children, params }: Props) {
    const { lang = 'he' } = await params

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

    const direction = directionMap[lang] || 'rtl'
    const htmlLang = htmlLangMap[lang] || 'he'

    return (
        <html lang={htmlLang} dir={direction}>
        <head>
            <meta name="google-site-verification" content="0r38RyQh61dBoLIyxVwILq9gnyn8glbioO4hbMH0oKg"/>
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
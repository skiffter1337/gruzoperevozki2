import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import {i18nConfig} from '../../i18n-config'

const inter = Inter({subsets: ['latin']})

export async function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({lang: locale}))
}

export const metadata: Metadata = {
    title: {
        template: '%s | UrbanMoving',
        default: 'Грузоперевозки и переезды | UrbanMoving',
    },
}

type Props = {
    children: ReactNode
    params: Promise<{ lang: string }>
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: Props) {

    const { lang } = await params;

    return (
        <html lang={lang}>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
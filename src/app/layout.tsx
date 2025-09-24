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

export default function RootLayout({
  children,
  params
}: {
    children: ReactNode
    params: { lang: string }
}) {
    return (
        <html lang={params.lang}>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
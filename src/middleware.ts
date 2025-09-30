import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ru', 'he', 'en'] as const

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.match(/\.(png|PNG|jpg|JPG|jpeg|gif|ico|svg|css|js)$/)) {
        return NextResponse.next()
    }

    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const acceptLanguage = request.headers.get('accept-language') || ''
    let locale: string = 'ru'

    if (acceptLanguage.includes('he')) locale = 'he'
    else if (acceptLanguage.includes('en')) locale = 'en'

    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
}
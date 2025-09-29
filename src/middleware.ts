
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18nConfig } from '../i18n-config'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = i18nConfig.locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return


    if (request.headers.get('accept-language')?.includes('ru')) {
        request.nextUrl.pathname = `/ru${pathname}`
    }

    if (request.headers.get('accept-language')?.includes('he')) {
        request.nextUrl.pathname = `/he${pathname}`
    }

    if (request.headers.get('accept-language')?.includes('en')) {
        request.nextUrl.pathname = `/en${pathname}`
    }

    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
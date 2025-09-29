'use client'

import ru from '@/locales/ru.json'
import he from '@/locales/he.json'
import en from '@/locales/en.json'

const translations = {
    ru: ru,
    he: he,
    en: en
} as const

export function useTranslation(lang: keyof typeof translations) {
    return translations[lang] || translations.ru
}
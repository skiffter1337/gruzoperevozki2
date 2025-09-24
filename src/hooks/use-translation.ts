'use client'

import ru from '@/locales/ru.json'
import he from '@/locales/he.json'

const translations = {
    ru: ru,
    he: he
} as const

export function useTranslation(lang: keyof typeof translations) {
    return translations[lang] || translations.ru
}
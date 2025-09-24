import ru from '@/locales/ru.json'
import he from '@/locales/he.json'

const translations = {
    ru: ru,
    he: he
} as const

export function getServerTranslations(lang: string) {
    return translations[lang as keyof typeof translations] || translations.ru
}
export const i18nConfig = {
    locales: ['ru', 'he', 'en'] as const,
    defaultLocale: 'ru',
} as const;

export type Locale = typeof i18nConfig.locales[number];
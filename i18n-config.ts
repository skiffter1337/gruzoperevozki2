export const i18nConfig = {
    locales: ['ru', 'he'],
    defaultLocale: 'ru',
    prefixDefault: false,
} as const;

export type Locale = typeof i18nConfig.locales[number];
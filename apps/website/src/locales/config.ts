import type { SpeakConfig, SpeakLocale } from 'qwik-speak';

const supportedLocales: SpeakLocale[] = [
    { lang: 'en', currency: 'USD', timeZone: 'America/Los_Angeles' },
    { lang: 'de', currency: 'EUR', timeZone: 'Europe/Berlin' },
];

export const config: SpeakConfig = {
    assets: ['site', 'header', 'footer', 'home', 'experience'],
    defaultLocale: supportedLocales[0],
    supportedLocales,
};

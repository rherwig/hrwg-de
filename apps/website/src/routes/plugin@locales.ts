import type { RequestHandler } from '@builder.io/qwik-city';

import { config } from '../locales/config';

export const onRequest: RequestHandler = ({ params, locale }) => {
    const languageParam = params.language;
    const supportedLocale = config.supportedLocales.find((value) => value.lang === languageParam);

    const lang = supportedLocale
        ? supportedLocale.lang
        : !params.language && config.defaultLocale.lang;

    if (!lang) {
        throw Error('404');
    }

    // Set Qwik locale
    locale(lang);
};

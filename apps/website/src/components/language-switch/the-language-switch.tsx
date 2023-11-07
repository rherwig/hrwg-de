import { useSpeakConfig } from 'qwik-speak';
import { $, component$, useComputed$ } from '@builder.io/qwik';

import type { DropdownItem } from '../../ui/forms/select/select';
import Select from '../../ui/forms/select/select';

export default component$(() => {
    const config = useSpeakConfig();

    const changeLocale$ = $((language: string) => {
        const newLocale = config.supportedLocales.find((locale) => locale.lang === language);
        if (!newLocale) {
            throw new Error(`Locale ${language} not supported`);
        }

        document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;

        location.reload();
    });

    const languageItems = useComputed$<DropdownItem[]>(() => {
        return config.supportedLocales.map((value) => ({
            value: value.lang,
            text: value.lang,
        }));
    });

    return (
        <Select
            items={languageItems.value}
            onChange$={changeLocale$}
        />
    );
});

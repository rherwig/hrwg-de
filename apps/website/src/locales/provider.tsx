import { component$, Slot } from '@builder.io/qwik';
import { QwikSpeakProvider } from 'qwik-speak';

import { config } from './config';
import { translationFn } from './utils';

export const LocalesProvider = component$(() => {
    return (
        <QwikSpeakProvider
            config={config}
            translationFn={translationFn}
        >
            <Slot />
        </QwikSpeakProvider>
    );
});

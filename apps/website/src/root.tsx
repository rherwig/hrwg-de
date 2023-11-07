import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import styles from './assets/scss/main.scss?inline';
import { RouterHead } from './components/router-head/router-head';
import { LocalesProvider } from './locales/provider';

export default component$(() => {
    useStyles$(styles);

    return (
        <LocalesProvider>
            <QwikCityProvider>
                <head>
                    <meta charSet="utf-8" />
                    <link
                        rel="manifest"
                        href="/manifest.json"
                    />
                    <RouterHead />
                </head>
                <body lang="en">
                    <RouterOutlet />
                    <ServiceWorkerRegister />
                </body>
            </QwikCityProvider>
        </LocalesProvider>
    );
});

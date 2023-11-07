import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
import type { RenderOptions } from '@builder.io/qwik';
import { isDev } from '@builder.io/qwik/build';
import { manifest } from '@qwik-client-manifest';

import Root from './root';
import { config } from './locales/config';

/**
 * Determine the base URL to use for loading the chunks in the browser.
 * The value set through Qwik 'locale()' in 'plugin.ts' is saved by Qwik in 'serverData.locale' directly.
 * Make sure the locale is among the 'supportedLocales'
 */
export function extractBase({ serverData }: RenderOptions): string {
    if (!isDev && serverData?.locale) {
        return `/build/${serverData.locale}`;
    }
    return '/build';
}

export default function (opts: RenderToStreamOptions) {
    return renderToStream(<Root />, {
        manifest,
        ...opts,
        base: extractBase,
        containerAttributes: {
            lang: opts.serverData?.locale || config.defaultLocale.lang,
            ...opts.containerAttributes,
        },
    });
}

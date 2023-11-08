import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikNxVite } from 'qwik-nx/plugins';
import { qwikSpeakInline } from 'qwik-speak/inline';

export default defineConfig({
    cacheDir: '../../node_modules/.vite/apps/website',
    plugins: [
        qwikNxVite(),
        qwikCity(),
        qwikVite({
            client: {
                outDir: '../../dist/apps/website/client',
            },
            ssr: {
                outDir: '../../dist/apps/website/server',
            },
            tsconfigFileNames: ['tsconfig.app.json'],
        }),
        qwikSpeakInline({
            supportedLangs: ['en', 'de'],
            defaultLang: 'en',
            assetsPath: 'apps/website/src/locales',
        }),
        tsconfigPaths({ root: '../../' }),
    ],
    server: {
        fs: {
            allow: ['../../'],
        },
    },
    preview: {
        headers: {
            'Cache-Control': 'public, max-age=600',
        },
    },
    test: {
        globals: true,
        cache: {
            dir: '../../node_modules/.vitest',
        },
        environment: 'node',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});

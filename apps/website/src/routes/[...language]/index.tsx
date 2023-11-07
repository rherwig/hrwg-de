import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { useTranslate } from 'qwik-speak';
import { TbBrandGithub } from '@qwikest/icons/tablericons';

export default component$(() => {
    const t = useTranslate();

    return (
        <div class="flex flex-col items-center mt-10">
            <h1 class={`mb-8 text-center font-serif text-5xl font-bold`}>
                {t('home.intro.headline')}
            </h1>

            <p class="mb-10 text-center text-xl text-gray-500">
                {t('home.intro.subline')} <br />
                It is also open-source, so feel free to check out the source code on{' '}
                <Link
                    class="relative inline-flex items-center gap-2 pl-5 ml-1 text-accent-400 hover:text-accent-500 transition-colors"
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/rherwig/hrwg-de"
                >
                    <TbBrandGithub class="absolute w-4 h-4 left-0" />
                    Github.
                </Link>
            </p>

            <Link
                href="/cv"
                class="flex items-center justify-center rounded-md bg-accent-700 px-8 py-3 text-sm uppercase text-accent-100 shadow-md shadow-accent-700/30 transition-all hover:bg-accent-800 focus:bg-accent-900"
            >
                {t('home.intro.cta')}
            </Link>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome',
};

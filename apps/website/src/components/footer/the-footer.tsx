import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useTranslate } from 'qwik-speak';

export default component$(() => {
    const t = useTranslate();

    return (
        <footer class={'mt-20 bg-black/75 print:hidden'}>
            <div class="container flex items-center justify-between px-4 py-8">
                <div class="">&copy; {t('footer.copyright')}</div>

                <div class="flex gap-8">
                    <Link
                        href="/privacy"
                        class="text-accent-400 underline transition-all hover:text-accent-500 hover:no-underline"
                    >
                        {t('footer.privacy')}
                    </Link>

                    <Link
                        href="/imprint"
                        class="text-accent-400 underline transition-all hover:text-accent-500 hover:no-underline"
                    >
                        {t('footer.imprint')}
                    </Link>
                </div>
            </div>
        </footer>
    );
});

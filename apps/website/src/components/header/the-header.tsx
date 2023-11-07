import { $, component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { TbPrinter } from '@qwikest/icons/tablericons';
import { useTranslate } from 'qwik-speak';

import { Button } from '../../ui';

export default component$(() => {
    const t = useTranslate();

    const handlePrintClick = $(() => {
        window.print();
    });

    return (
        <header class={'print:hidden bg-gradient-to-b from-black to-transparent from-0% to-75%'}>
            <div class="container flex h-20 items-center justify-between px-4">
                <nav class="flex items-center gap-4">
                    <div class="text-2xl font-bold">
                        <Link href="/">{t('site.name')}</Link>
                    </div>

                    <ul class="flex gap-2">
                        <li>
                            <Link
                                href="/cv"
                                class="px-8 transition-colors hover:text-accent-600"
                            >
                                CV
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div class="flex gap-2">
                    <Button
                        kind={'primary'}
                        onClick$={handlePrintClick}
                    >
                        <TbPrinter />
                        Print
                    </Button>
                </div>
            </div>
        </header>
    );
});

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import TheHeroUnit from '../../../components/cv/the-hero-unit';
import TheTimeline from '../../../components/cv/the-timeline';
import TheFacts from '../../../components/cv/the-facts';

export default component$(() => {
    return (
        <div class="mt-10">
            <TheHeroUnit />

            <div class="flex flex-col lg:flex-row justify-between gap-10 print:block">
                <aside class="flex-[2]">
                    <TheFacts />
                </aside>
                <main class="flex-[3] print:break-before-page">
                    <section class="mt-20">
                        <TheTimeline />
                    </section>
                </main>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'CV',
};

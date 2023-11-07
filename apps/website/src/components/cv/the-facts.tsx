import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';

import TheAddress from './the-address';
import TheSocialLinks from './the-social-links';
import TheSkills from './the-skills';
import TheLanguages from './the-languages';

export default component$(() => {
    const t = useTranslate();

    return (
        <div class="mt-20 print:text-center">
            <section class="print:flex flex-col items-center mb-20">
                <h2 class="text-2xl leading-6 font-bold uppercase mb-8">
                    {t('experience.facts.info')}
                </h2>

                <TheAddress />
            </section>

            <section class="print:flex flex-col items-center mb-20 print:break-after-page">
                <h2 class="text-2xl leading-6 font-bold uppercase mb-8">
                    {t('experience.facts.social')}
                </h2>

                <TheSocialLinks />
            </section>

            <section class="print:flex flex-col items-center mb-20 print:mt-20">
                <h2 class="text-2xl leading-6 font-bold uppercase mb-8">
                    {t('experience.facts.skills')}
                </h2>

                <TheSkills />
            </section>

            <section class="print:flex flex-col items-center print:break-after-page">
                <h2 class="text-2xl leading-6 font-bold uppercase mb-8">
                    {t('experience.facts.languages')}
                </h2>

                <TheLanguages />
            </section>
        </div>
    );
});

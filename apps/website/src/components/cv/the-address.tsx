import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';

export default component$(() => {
    const t = useTranslate();
    const isPrivateMode = true;

    return (
        <div class="grid w-full grid-cols-2 text-left leading-[3rem] print:max-w-xs md:leading-loose print:text-black">
            <div class="pr-10 font-bold uppercase">{t('experience.address.address')}</div>

            {!isPrivateMode ? (
                <div>
                    <div>Rosenberger Str. 9</div>
                    <div>28790 Schwanewede</div>
                    <div>{t('experience.address.country')}</div>
                </div>
            ) : (
                <div>{t('experience.restricted')}</div>
            )}

            <div class="pr-10 font-bold uppercase">{t('experience.address.phone')}</div>

            {!isPrivateMode ? (
                <div>
                    <a
                        href="#"
                        class="block underline transition-all hover:translate-x-1"
                    >
                        +49 (0) 151 / 12 297 144
                    </a>
                </div>
            ) : (
                <div>{t('experience.restricted')}</div>
            )}

            <div class="pr-10 font-bold uppercase">{t('experience.address.mail')}</div>
            <div>
                <a
                    href="mailto:rico@hrwg.de"
                    class="block underline transition-all hover:translate-x-1"
                >
                    rico@hrwg.de
                </a>
            </div>

            <div class="pr-10 font-bold uppercase">{t('experience.address.website')}</div>
            <div>
                <a
                    href="https://hrwg.de"
                    class="block underline transition-all hover:translate-x-1"
                >
                    hrwg.de
                </a>
            </div>
        </div>
    );
});

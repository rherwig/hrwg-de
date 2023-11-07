import { component$, Slot } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';

import CircularProgress from '../../ui/progress/circular-progress';

const LanguagesRow = component$(() => (
    <div class="flex justify-between">
        <Slot />
    </div>
));

const LanguagesColumn = component$(() => (
    <div class="flex flex-col justify-center items-center">
        <Slot />
    </div>
));

export default component$(() => {
    const t = useTranslate();

    return (
        <div class="flex flex-col gap-10 w-full print:max-w-md">
            <LanguagesRow>
                <LanguagesColumn>
                    <CircularProgress
                        progress={100}
                        small
                    />

                    <p class="text-center text-sm mt-1">{t('experience.languages.german')}</p>
                </LanguagesColumn>

                <LanguagesColumn>
                    <CircularProgress
                        progress={90}
                        small
                    />

                    <p class="text-center text-sm mt-1">{t('experience.languages.english')}</p>
                </LanguagesColumn>

                <LanguagesColumn>
                    <CircularProgress
                        progress={50}
                        small
                    />

                    <p class="text-center text-sm mt-1">{t('experience.languages.french')}</p>
                </LanguagesColumn>

                <LanguagesColumn>
                    <CircularProgress
                        progress={30}
                        small
                    />

                    <p class="text-center text-sm mt-1">{t('experience.languages.czech')}</p>
                </LanguagesColumn>
            </LanguagesRow>
        </div>
    );
});

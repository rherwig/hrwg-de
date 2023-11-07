import { component$, Slot } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';

import CircularProgress from '../../ui/progress/circular-progress';

const SkillsRow = component$(() => (
    <div class="flex justify-between">
        <Slot />
    </div>
));

const SkillsColumn = component$(() => (
    <div class="flex flex-col justify-center items-center">
        <Slot />
    </div>
));

export default component$(() => {
    const t = useTranslate();

    return (
        <div class="page-break flex flex-col gap-10 w-full print:max-w-md">
            <SkillsRow>
                <SkillsColumn>
                    <CircularProgress progress={90} />

                    <p class="text-center text-sm mt-2">NodeJS</p>
                </SkillsColumn>

                <SkillsColumn>
                    <CircularProgress progress={85} />

                    <p class="text-center text-sm mt-2">Vue</p>
                </SkillsColumn>

                <SkillsColumn>
                    <CircularProgress progress={90} />

                    <p class="text-center text-sm mt-2">{t('experience.skills.communication')}</p>
                </SkillsColumn>
            </SkillsRow>

            <SkillsRow>
                <SkillsColumn>
                    <CircularProgress
                        progress={80}
                        small
                    />

                    <p class="text-center text-sm mt-2">React</p>
                </SkillsColumn>

                <SkillsColumn>
                    <CircularProgress
                        progress={80}
                        small
                    />

                    <p class="text-center text-sm mt-2">Build Automation</p>
                </SkillsColumn>

                <SkillsColumn>
                    <CircularProgress
                        progress={80}
                        small
                    />

                    <p class="text-center text-sm mt-2">Testing</p>
                </SkillsColumn>

                <SkillsColumn>
                    <CircularProgress
                        progress={65}
                        small
                    />

                    <p class="text-center text-sm mt-2">UX Design</p>
                </SkillsColumn>
            </SkillsRow>
        </div>
    );
});

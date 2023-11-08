import { component$ } from '@builder.io/qwik';
import { useTranslate } from 'qwik-speak';
import { TbHome, TbSchool, TbBuildingEstate, TbQuestionMark } from '@qwikest/icons/tablericons';

import TimelineItem from '../../ui/timeline/timeline-item';

export default component$(() => {
    const t = useTranslate();

    return (
        <>
            <TimelineItem headline={t('experience.timeline.introduction.headline')}>
                <div q:slot="icon">
                    <TbHome />
                </div>

                <p class="mb-2">{t('experience.timeline.introduction.p1')}</p>

                <p class="mb-2">{t('experience.timeline.introduction.p2')}</p>

                <p class="mb-2">{t('experience.timeline.introduction.p3')}</p>

                <p class="mb-2">{t('experience.timeline.introduction.p4')}</p>
            </TimelineItem>

            <TimelineItem headline={t('experience.timeline.education.title')}>
                <div q:slot="icon">
                    <TbSchool />
                </div>
            </TimelineItem>

            <TimelineItem
                headline={t('experience.timeline.education.headline')}
                smallBubble
                date="2015"
            >
                <p class="mb-2">{t('experience.timeline.education.p1')}</p>

                <p>{t('experience.timeline.education.p2')}</p>
            </TimelineItem>

            <TimelineItem headline={t('experience.timeline.experience.headline')}>
                <div q:slot="icon">
                    <TbBuildingEstate />
                </div>
            </TimelineItem>

            <TimelineItem
                headline={t('experience.timeline.experience.tobit.headline')}
                smallBubble
                date="2015"
            >
                <p class="mb-2">{t('experience.timeline.experience.tobit.p1')}</p>
                <p class="mb-2">{t('experience.timeline.experience.tobit.p2')}</p>
            </TimelineItem>

            <TimelineItem
                headline={t('experience.timeline.experience.shopmacher.headline')}
                smallBubble
                date="2017"
            >
                <p class="mb-2">{t('experience.timeline.experience.shopmacher.p1')}</p>
                <p class="mb-2">{t('experience.timeline.experience.shopmacher.p2')}</p>
                <p class="mb-2">{t('experience.timeline.experience.shopmacher.p3')}</p>
            </TimelineItem>

            <TimelineItem
                headline={t('experience.timeline.experience.kellerkinder.headline')}
                smallBubble
                date="2021"
            >
                <p class="mb-2">{t('experience.timeline.experience.kellerkinder.p1')}</p>

                <p class="mb-2">{t('experience.timeline.experience.kellerkinder.p2')}</p>
            </TimelineItem>

            <TimelineItem
                headline={t('experience.timeline.experience.iflow.headline')}
                smallBubble
                date="2022"
            >
                <p class="mb-2">{t('experience.timeline.experience.iflow.p1')}</p>
            </TimelineItem>

            <TimelineItem
                date="2024"
                complete={false}
            >
                <div q:slot="icon">
                    <TbQuestionMark />
                </div>
            </TimelineItem>
        </>
    );
});

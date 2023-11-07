import type { Component } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';

interface Props {
    headline?: string;
    text?: string;
    date?: string;
    dateSubline?: string;
    icon?: Component<any>;
    line?: 'solid' | 'dashed';
    smallBubble?: boolean;
    complete?: boolean;
}

export default component$((props: Props) => {
    const _line = props.line || 'solid';
    const _complete = typeof props.complete === 'undefined' ? true : props.complete;

    const headline = props.smallBubble ? (
        <h4 class="font-bold mb-4 text-xl leading-4">{props.headline}</h4>
    ) : (
        <h3 class="font-bold mb-4 text-2xl leading-6 uppercase">{props.headline}</h3>
    );

    return (
        <div class="group grid grid-cols-timeline-mobile lg:grid-cols-timeline gap-4 print:text-black">
            <div class="flex-1 text-right">
                {props.date && (
                    <div class={['mb-1', props.smallBubble ? 'leading-4' : 'leading-6']}>
                        {props.date}
                    </div>
                )}

                {props.dateSubline && <div class="text-sm text-gray-400">{props.dateSubline}</div>}
            </div>

            <div class="relative flex justify-center">
                <div
                    class={[
                        props.smallBubble ? 'w-4 h-4' : 'w-6 h-6',
                        _line === 'dashed' ? 'before:border-dashed' : 'before:border-solid',
                        _complete
                            ? 'bg-accent print:bg-black text-white print:text-transparent'
                            : 'text-accent border-2 border-dashed border-accent',
                        'rounded-full group-last-of-type:before:hidden before:block before:absolute before:h-full before:border-l-2 before:border-accent before:left-1/2 before:-translate-x-[1px] z-10 before:-z-10',
                        'print:before:border-black',
                    ]}
                >
                    <div class={_complete ? 'p-[4px]' : 'p-[2px]'}>
                        <Slot name="icon" />
                    </div>
                </div>
            </div>

            <div class="flex-1 mb-8">
                {headline}

                <div class="text-primary-300">
                    <Slot />
                </div>
            </div>
        </div>
    );
});

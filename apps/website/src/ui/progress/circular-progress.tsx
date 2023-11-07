import { component$ } from '@builder.io/qwik';

interface Props {
    progress: number;
    small?: boolean;
}

export default component$((props: Props) => {
    const { progress } = props;
    const size = props.small ? 80 : 128;
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = ((2 * 22) / 7) * radius;

    return (
        <div class="inline-flex items-center justify-center relative">
            <svg
                style={{ width: size, height: size }}
                class="transform -rotate-90"
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke-width={strokeWidth}
                    class="stroke-accent-100 fill-transparent"
                />

                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke-width={strokeWidth}
                    stroke-dasharray={circumference}
                    stroke-dashoffset={circumference - (progress / 100) * circumference}
                    class="stroke-accent print:stroke-black fill-transparent"
                />
            </svg>

            <div
                class={[
                    'absolute print:text-black',
                    {
                        'text-lg': props.small,
                        'text-2xl': !props.small,
                    },
                ]}
            >
                {progress}%
            </div>
        </div>
    );
});

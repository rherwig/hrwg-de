import { component$, Slot } from '@builder.io/qwik';

interface Props {
    kind?: 'primary' | 'secondary';
    onClick$?: () => void;
}

export default component$((props: Props) => {
    return (
        <button
            onClick$={props.onClick$}
            class={[
                'flex gap-2 items-center px-4 py-2 rounded-sm text-sm outline-2 outline transition-colors',
                {
                    'bg-accent-700 hover:bg-accent-800 outline-accent-700 text-white':
                        props.kind === 'primary',
                    'bg-transparent hover:bg-accent-700 outline-accent-700 text-accent-700 hover:text-white':
                        props.kind === 'secondary',
                },
            ]}
        >
            <Slot />
        </button>
    );
});

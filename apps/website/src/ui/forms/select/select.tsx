import type { Component, PropFunction } from '@builder.io/qwik';
import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';

export interface DropdownItem {
    value: string;
    text?: string;
    icon?: Component<any>;
}

interface Props {
    onChange$: PropFunction<(language: string) => void>;
    items: DropdownItem[];
    value?: string;
}

export default component$<Props>((props) => {
    const isActive = useSignal<boolean>(false);

    const activeItem = useComputed$<DropdownItem | undefined>(() => {
        return props.items.find((item) => item.value === props.value);
    });

    const toggle = $(() => {
        isActive.value = !isActive.value;
    });

    const handleChange = $(async (value: string) => {
        await props.onChange$(value);
        return toggle();
    });

    return (
        <div
            class="relative"
            role="combobox"
            aria-expanded={isActive.value}
            aria-label="Dropdown"
        >
            <button
                id="dropdownDefault"
                title="Dropdown Button"
                data-dropdown-toggle="dropdown"
                class="inline-flex items-center rounded-lg bg-accent-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-accent-800 focus:outline-none focus:ring-4 focus:ring-accent-300"
                type="button"
                onClick$={toggle}
            >
                {activeItem.value?.icon && (
                    <span class="mr-2 flex h-4 w-4 items-center pb-[2px]">
                        {activeItem.value.icon}
                    </span>
                )}

                {activeItem.value && (
                    <span class="leading-none">
                        {activeItem.value.text || activeItem.value.value}
                    </span>
                )}

                <svg
                    class="ml-2 h-4 w-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                id="dropdown"
                class={[
                    'absolute z-10 mt-2 min-w-full divide-y divide-gray-100 rounded bg-white text-accent-dark shadow-md shadow-accent-700/30 transition-all',
                    {
                        hidden: !isActive,
                    },
                ]}
            >
                <ul
                    class="py-1 text-sm"
                    aria-labelledby="dropdownDefault"
                >
                    {props.items.map((item) => (
                        <li key={item.value}>
                            <a
                                href="#"
                                class="flex items-center py-2 px-4 hover:bg-accent-dark hover:text-accent-light"
                                onClick$={() => handleChange(item.value)}
                            >
                                <span class="mr-2 flex h-4 w-4 items-center pb-[2px]">
                                    {!!item.icon && item.icon}
                                </span>
                                {item.text && <span class="leading-none">{item.text}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

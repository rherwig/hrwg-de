import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
    return (
        <main class="container mb-auto px-4">
            <Slot />
        </main>
    );
});

import { component$, Slot } from '@builder.io/qwik';

import TheHeader from '../components/header/the-header';
import TheFooter from '../components/footer/the-footer';

export default component$(() => {
    return (
        <div class={['flex min-h-screen flex-col justify-between']}>
            <TheHeader />

            <Slot />

            <TheFooter />
        </div>
    );
});

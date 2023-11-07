import { component$ } from '@builder.io/qwik';

import ProfileImage from '../../assets/images/profile/rico.webp?jsx';

export default component$(() => {
    return (
        <section class="mb-6 flex print:text-black">
            <div class="flex flex-1 flex-col items-center justify-center">
                <div class="flex items-center justify-center">
                    <div class="mb-8 flex aspect-square w-[220px] items-center justify-center rounded-full bg-gradient-to-b from-accent-main to-accent-400">
                        <ProfileImage
                            alt="Bild von Rico Herwig"
                            placeholder="blur"
                            class="aspect-square w-[200px] rounded-full object-cover"
                        />
                    </div>
                </div>

                <h1 class={`text-center text-6xl font-bold uppercase`}>Rico Herwig</h1>

                <h2 class={`text-center text-2xl text-accent-main font-sans`}>
                    Frontend Developer
                </h2>
            </div>
        </section>
    );
});

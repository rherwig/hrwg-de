import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { TbBrandGithub, TbBrandXing, TbBrandLinkedin, TbBrandX } from '@qwikest/icons/tablericons';

interface SocialLinkProps {
    href: string;
}

const SocialLink = component$((props: SocialLinkProps) => (
    <Link
        rel="noopener"
        target="_blank"
        class="flex items-center gap-2"
        href={props.href}
    >
        <Slot name="icon" />

        <span class="transition-all underline group-hover:translate-x-1">
            <Slot />
        </span>
    </Link>
));

export default component$(() => {
    return (
        <div class="grid grid-cols-2 print:max-w-xs gap-y-4 gap-x-8 print:text-black">
            <SocialLink href="https://github.com/rherwig">
                <TbBrandGithub q:slot="icon" />
                @rherwig
            </SocialLink>

            <SocialLink href="https://www.xing.com/profile/Rico_Herwig">
                <TbBrandXing q:slot="icon" />
                Rico Herwig
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/rico-herwig-3068b7169/">
                <TbBrandLinkedin q:slot="icon" />
                Rico Herwig
            </SocialLink>

            <SocialLink href="https://twitter.com/rherwig4711">
                <TbBrandX q:slot="icon" />
                @rherwig4711
            </SocialLink>
        </div>
    );
});

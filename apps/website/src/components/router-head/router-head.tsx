import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export const RouterHead = component$(() => {
    const head = useDocumentHead();
    const location = useLocation();

    return (
        <>
            <title>{`${head.title} | hrwg`}</title>

            <link
                rel="canonical"
                href={location.url.href}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                name="description"
                content="I am Rico, an professional JavaScript developer from northern Germany. Here, you can find out more about who I am and what I do."
            />
            <meta
                name="theme-color"
                content="#09090b"
            />
            <link
                rel="icon"
                type="image/icon"
                href="/favicon.ico"
            />

            {head.meta.map((m) => (
                <meta
                    key={m.key}
                    {...m}
                />
            ))}

            {head.links.map((l) => (
                <link
                    key={l.key}
                    {...l}
                />
            ))}

            {head.styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.style}
                />
            ))}

            {head.scripts.map((s) => (
                <script
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.script}
                />
            ))}
        </>
    );
});

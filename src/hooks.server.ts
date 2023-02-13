import { lang, theme, themeClass } from '$lib/server';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    event.locals.lang = lang(event.cookies);
    event.locals.theme = theme(event.cookies);
    event.locals.user = undefined;

    const response = await resolve(event, {
        transformPageChunk: ({ html }) =>
            html
                .replace('%lang%', event.locals.lang)
                .replace('%theme%', themeClass(event.locals.theme)),
    });

    return response;
}) satisfies Handle;

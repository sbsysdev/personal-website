import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    return {
        lang: locals.lang,
        theme: locals.theme,
        user: locals.user,
    };
}) satisfies LayoutServerLoad;

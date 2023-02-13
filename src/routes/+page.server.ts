import { allowedLangs, allowedThemes } from '$lib/types';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    if (url.pathname !== '/') return {};

    throw redirect(302, 'landing');
}) satisfies PageServerLoad;

export const actions = {
    'theme-dark': async ({ cookies, request }) => {
        const data = await request.formData();

        const url = data.get('url');

        cookies.set('theme', allowedThemes.dark, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60 * 60 * 24 * 30,
        });

        throw redirect(302, url?.toString() ?? '');
    },
    'theme-light': async ({ cookies, request }) => {
        const data = await request.formData();

        const url = data.get('url');

        cookies.set('theme', allowedThemes.light, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60 * 60 * 24 * 30,
        });

        throw redirect(302, url?.toString() ?? '');
    },
    'lang-en': async ({ cookies, request }) => {
        const data = await request.formData();

        const url = data.get('url');

        cookies.set('lang', allowedLangs.en, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60 * 60 * 24 * 30,
        });

        throw redirect(302, url?.toString() ?? '');
    },
    'lang-es': async ({ cookies, request }) => {
        const data = await request.formData();

        const url = data.get('url');

        cookies.set('lang', allowedLangs.es, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60 * 60 * 24 * 30,
        });

        throw redirect(302, url?.toString() ?? '');
    },
} satisfies Actions;

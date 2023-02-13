import { allowedLangs } from '$lib/types';
import type { Cookies } from '@sveltejs/kit';
import type { AllowedLangs } from '../../app';

export function lang(cookies: Cookies): AllowedLangs {
    return (cookies.get('lang') as AllowedLangs) ?? allowedLangs.en;
}

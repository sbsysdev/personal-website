import type { Cookies } from '@sveltejs/kit';
import type { AllowedThemes } from '../../app';

export function theme(cookies: Cookies): AllowedThemes {
    return (cookies.get('theme') as AllowedThemes) ?? 'dark';
}

export function themeClass(theme: AllowedThemes): string {
    return `theme--${theme}`;
}

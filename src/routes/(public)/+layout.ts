import type { QuickAccessLink } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
    const isLanding = url.pathname === '/landing';

    let quickAccessLinks: QuickAccessLink[] = [];

    if (isLanding)
        quickAccessLinks = [
            {
                path: '#about',
                value: 'Who am I',
            },
        ];

    return { quickAccessLinks };
}) satisfies LayoutLoad;

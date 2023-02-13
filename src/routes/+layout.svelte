<script lang="ts">
    import './_layout.scss';
    import { translation } from '$lib/lang';
    import type { LayoutData } from './$types';

    export let data: LayoutData;

    translation('actions', data.lang);
</script>

<slot>Loading...</slot>

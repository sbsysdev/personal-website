<script lang="ts">
    /* import type { PageData } from './$types'; */
    import Curriculum from './curriculum/Curriculum.svelte';

    /* export let data: PageData; */
</script>

<svelte:head>
    <title>Steven Joseph Bustillo López - RESUME</title>
</svelte:head>

<Curriculum />

<style lang="scss">
    @import '$lib/styles';

    :global(#app) {
        align-items: center;
    }

    :global(.page) {
        max-width: 216mm;
        min-width: 216mm;
        width: 216mm;

        height: 279mm;
        max-height: 279mm;
        min-height: 279mm;

        overflow: hidden;
    }
    /* :global(.page) {
        @include shadow(all xs);

        @include theme(dark) {
            @include shadow-color(all l10);
        }
    } */
    :global(.page) {
        @include bg-color(l10);
        @include font-color(d10);
    }
</style>

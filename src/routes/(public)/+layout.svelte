<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<header>{data.lang} - header</header>

<div class="content">
    <slot />
</div>

<footer>
    <span>Footer</span>
</footer>

<style lang="scss">
    @import '$lib/styles';

    :global(#app) {
        position: relative;
    }

    .content {
        @include flex;
        flex-grow: 1;
    }

    footer {
        @include bg-color(l20);
        @include padding(all md);

        @include theme(dark) {
            @include bg-color(d20);
        }
    }
</style>

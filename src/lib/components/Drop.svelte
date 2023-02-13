<script lang="ts">
    import type { Alignment } from '$lib/types';

    export let anchorRow: Alignment = 'center';
    export let anchorCol: Alignment = 'center';

    export let dropRow: Alignment = 'center';
    export let dropCol: Alignment = 'center';
</script>

<div
    class="drop"
    data-anchor-row={anchorRow}
    data-anchor-col={anchorCol}
    data-drop-row={dropRow}
    data-drop-col={dropCol}
>
    <slot name="anchor" />

    <slot name="drop" />
</div>

<style lang="scss">
    @import '$lib/styles';

    .drop {
        position: relative;

        // anchor row alignment
        &[data-anchor-row='start'] {
            --anchor-x: 0%;
        }
        &[data-anchor-row='center'] {
            --anchor-x: 50%;
        }
        &[data-anchor-row='end'] {
            --anchor-x: 100%;
        }

        // anchor col alignment
        &[data-anchor-col='start'] {
            --anchor-y: 0%;
        }
        &[data-anchor-col='center'] {
            --anchor-y: 50%;
        }
        &[data-anchor-col='end'] {
            --anchor-y: 100%;
        }

        // drop row alignment
        &[data-drop-row='start'] {
            --drop-x: 0%;
        }
        &[data-drop-row='center'] {
            --drop-x: -50%;
        }
        &[data-drop-row='end'] {
            --drop-x: -100%;
        }

        // drop col alignment
        &[data-drop-col='start'] {
            --drop-y: 0%;
        }
        &[data-drop-col='center'] {
            --drop-y: -50%;
        }
        &[data-drop-col='end'] {
            --drop-y: -100%;
        }

        // basic animation params
        &[data-anchor-row='start'][data-drop-row='end'] {
            --drop-x-translate: calc(var(--drop-x) + #{size(xs, space)});
        }
        &[data-anchor-row='end'][data-drop-row='start'] {
            --drop-x-translate: calc(var(--drop-x) - #{size(xs, space)});
        }
        &[data-anchor-col='start'][data-drop-col='end'] {
            --drop-y-translate: calc(var(--drop-y) + #{size(xs, space)});
        }
        &[data-anchor-col='end'][data-drop-col='start'] {
            --drop-y-translate: calc(var(--drop-y) - #{size(xs, space)});
        }

        & > :global([slot='drop']) {
            @include disabled;
            opacity: 0;
            position: absolute;
            transition: all 0.125s ease-in-out;
            z-index: 1;

            left: var(--anchor-x);
            top: var(--anchor-y);
            transform: translate(var(--drop-x-translate, var(--drop-x)), var(--drop-y-translate, var(--drop-y)));
        }

        &:hover {
            & > :global([slot='drop']) {
                @include enabled;
                opacity: 1;
                transform: translate(var(--drop-x), var(--drop-y));
            }
        }
    }
</style>

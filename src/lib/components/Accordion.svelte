<script lang="ts">
    import type { Direction } from '$lib/types';

    export let direction: Direction = 'down';
    export let isOpen: boolean = false;
</script>

<div class="accordion" data-accordion-direction={direction} data-accordion-open={isOpen} on:click on:keydown>
    <slot name="content" />

    {#if isOpen}
        <slot name="accordion" />
    {/if}
</div>

<style lang="scss">
    @import '$lib/styles';

    .accordion {
        display: flex;

        &[data-accordion-direction='down'] {
            flex-direction: column;
        }
        &[data-accordion-direction='up'] {
            flex-direction: column-reverse;
        }

        &[data-accordion-direction='down'],
        &[data-accordion-direction='up'] {
            & > :global([slot='accordion']) {
                height: 0;
            }

            &[data-accordion-open='true'] {
                & > :global([slot='accordion']) {
                    height: auto;
                }
            }
        }

        &[data-accordion-direction='right'] {
            flex-direction: row;
        }
        &[data-accordion-direction='left'] {
            flex-direction: row-reverse;
        }

        &[data-accordion-direction='right'],
        &[data-accordion-direction='left'] {
            & > :global([slot='accordion']) {
                width: 0;
            }

            &[data-accordion-open='true'] {
                & > :global([slot='accordion']) {
                    width: auto;
                }
            }
        }

        & > :global([slot='accordion']) {
            opacity: 0;
            overflow: hidden;
            transition: all 1s ease-in-out;
        }

        &[data-accordion-open='true'] {
            & > :global([slot='accordion']) {
                opacity: 1;
            }
        }
    }
</style>

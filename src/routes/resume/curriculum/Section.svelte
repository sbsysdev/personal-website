<script lang="ts">
    import type { WorkExperience } from '../types';

    export let title: string;

    export let text: string | string[] | WorkExperience = '';
</script>

<section class="section">
    <h2>{title}</h2>

    <div class="paragraphs">
        {#if typeof text === 'string'}
            <p>{text}</p>
        {/if}

        {#if Array.isArray(text)}
            {#each text as paragraph}
                <p>{paragraph}</p>
            {/each}
        {/if}

        {#if !Array.isArray(text) && typeof text === 'object'}
            <article class="work-experience">
                <header>
                    <h3>{text.title}</h3>

                    <span class="divider" />

                    <span>{text.place}</span>
                </header>

                <section class="references">
                    <span>{text.start}</span>

                    <span class="divider" />

                    <span>{text.end}</span>

                    <span class="divider" />

                    <span>{text.reference}</span>
                </section>
            </article>
        {/if}
    </div>

    <slot />
</section>

<style lang="scss">
    @import '$lib/styles';

    .section {
        @include flex;
        @include gap(all sm);

        & > h2 {
            @include font-color(50, secondary);
            @include font-size(lg);
            @include font-weight(60);
        }
    }

    .paragraphs {
        @include flex;
        @include gap(all xs);

        & > p {
            text-align: justify;
        }
    }

    .work-experience {
    }

    .references {
    }

    .divider {
    }
</style>

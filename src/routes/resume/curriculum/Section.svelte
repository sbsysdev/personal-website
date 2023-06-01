<script lang="ts">
    import { Icon } from '$lib/components';
    import type { WorkExperience } from '../types';

    export let title: string;

    export let content: string | string[] | WorkExperience[] = '';
</script>

<section class="section">
    <h2>{title}</h2>

    <div class="paragraphs">
        {#if typeof content === 'string'}
            <p>{content}</p>
        {/if}

        {#if Array.isArray(content)}
            {#each content as contentItem}
                {#if typeof contentItem === 'string'}
                    <p>{contentItem}</p>
                {/if}

                {#if typeof contentItem === 'object'}
                    <article class="work-experience">
                        <header>
                            <h3>{contentItem.title}</h3>

                            <span class="divider" />

                            <span>{contentItem.place}</span>
                        </header>

                        <section class="references">
                            <span>De {contentItem.start} a {contentItem.end}</span>

                            <span> {contentItem.reference}</span>
                        </section>

                        {#if typeof contentItem.text === 'string'}
                            <p>{contentItem.text}</p>
                        {/if}

                        {#if Array.isArray(contentItem.text)}
                            {#each contentItem.text as paragraph}
                                <p>{paragraph}</p>
                            {/each}
                        {/if}

                        {#if contentItem.list.length > 0}
                            <p class="list-title">Trabajé con (tiempo usando):</p>

                            <ul class="list">
                                {#each contentItem.list as item}
                                    <li>
                                        {#if item.img !== undefined}
                                            <img src={item.img} alt={item.text} />
                                        {/if}

                                        {#if item.img === undefined}
                                            <i>
                                                <Icon path={item.icon} />
                                            </i>
                                        {/if}

                                        <div>
                                            <span>{item.text}</span>

                                            <div>
                                                <span
                                                    style="transform: translateX({item.percentage -
                                                        100}%);"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </article>
                {/if}
            {/each}
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
        @include font-size(sm);
        @include gap(all xs);
        text-align: justify;
    }

    .divider {
        @include border-color(x 50 secondary);
        @include border-width(x xs);
        height: 100%;
    }

    .work-experience {
        @include flex;
        @include gap(all xs);

        &:not(:last-of-type) {
            @include margin(bottom md);
        }

        & > header {
            @include flex(row, center);
            @include gap(all xs);
            @include font-color(50, primary);
            @include font-weight(60);
        }
    }

    .references {
        @include flex;
        @include font-weight(60);

        & > span {
            word-wrap: break-word;
        }
    }

    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @include gap(all sm);
        flex-wrap: wrap;

        & > li {
            @include flex(row, center);
            @include gap(all xs);
            list-style: none;

            & > img {
                @include width(sm, element);
            }

            & > i {
                @include font-color(50, primary);
                @include font-size(sm, element);
            }

            & > div {
                @include flex;
                @include gap(all xs split);
                flex-grow: 1;

                & > span {
                    @include flex(row, center, space-between);
                    @include font-size(xs);
                    @include font-weight(60);
                    @include gap(all xs);
                }

                & > div {
                    @include bg-color(20);
                    @include height(sm, split);
                    @include rounded(all xs);
                    overflow: hidden;
                    position: relative;

                    & > span {
                        @include bg-color(50, secondary);
                        @include rounded(all xs);
                        height: 100%;
                        position: absolute;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>

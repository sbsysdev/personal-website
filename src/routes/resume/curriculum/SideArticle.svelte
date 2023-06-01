<script lang="ts">
    import { Icon } from '$lib/components';
    import type { SideArticleGraphGroup, SideArticleListItem } from '../types';

    export let title: string;

    export let type: 'list' | 'graph';

    export let list: SideArticleListItem[] = [];

    export let graphs: SideArticleGraphGroup[] = [];
</script>

<article class="article">
    <h3>{title}</h3>

    {#if type === 'list'}
        <ul class="list">
            {#each list as item}
                <li>
                    {#if item.img !== undefined}
                        <img src={item.img} alt={item.text} />
                    {/if}

                    {#if item.img === undefined}
                        <i>
                            <Icon path={item.icon} />
                        </i>
                    {/if}

                    <a href={item.redirect} target="_blank" rel="noreferrer">{item.text}</a>
                </li>
            {/each}
        </ul>
    {/if}

    {#if type === 'graph'}
        <ul class="graph">
            {#each graphs as item}
                <li>
                    <h4>{item.title}</h4>

                    <ul class="group">
                        {#each item.graphs as graph}
                            <li>
                                {#if graph.img !== undefined}
                                    <img src={graph.img} alt={graph.text} />
                                {/if}

                                {#if graph.img === undefined}
                                    <i>
                                        <Icon path={graph.icon} />
                                    </i>
                                {/if}

                                <div>
                                    <div>
                                        <span>{graph.text}</span>

                                        <span>{graph.percentage}%</span>
                                    </div>

                                    <span>
                                        <span
                                            style="transform: translateX({graph.percentage -
                                                100}%);"
                                        />
                                    </span>
                                </div>
                            </li>
                        {/each}
                    </ul>
                </li>
            {/each}
        </ul>
    {/if}
</article>

<style lang="scss">
    @import '$lib/styles';

    .article {
        @include flex;
        @include gap(all sm);
        @include padding(x sm);

        & > h3 {
            @include font-color(50, secondary);
            //@include font-size(lg);
            @include font-weight(60);
            text-align: center;
        }
    }

    .list {
        @include flex;
        @include gap(all xs);

        & > li {
            @include flex(row, center);
            @include gap(all sm);
            list-style: none;

            & > img {
                @include width(md, element);
            }

            & > i {
                @include font-color(50, primary);
                @include font-size(2xl);
            }

            & > a {
                @include font-size(sm);
                @include font-weight(60);
                letter-spacing: 0.01em;
                text-decoration: none;
            }
        }
    }

    .graph {
        @include flex;
        @include gap(all md);

        & > li {
            @include flex;
            @include gap(all xs);
            list-style: none;

            & > h4 {
                @include font-color(50, secondary);
                @include font-size(sm);
                @include font-weight(60);
                letter-spacing: 0.1em;
                text-align: center;
            }
        }
    }

    .group {
        @include flex;
        @include gap(all sm);

        & > li {
            @include flex(row, center);
            @include gap(all xs);
            list-style: none;

            & > img {
                @include width(md, element);
            }

            & > i {
                @include font-color(50, primary);
                @include font-size(md, element);
            }

            & > div {
                @include flex;
                flex-grow: 1;

                & > div {
                    @include flex(row, center, space-between);
                    @include font-size(sm);
                    @include font-weight(60);
                    @include gap(all xs);
                    letter-spacing: 0.01em;
                }

                & > span {
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

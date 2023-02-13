<script lang="ts">
    import { mdiLanguageTypescript, mdiNodejs, mdiReact, mdiSass, mdiTailwind } from '@mdi/js';
    import type { SectionListItem } from '../types';
    import Section from './Section.svelte';

    const sections: SectionListItem[] = [
        {
            title: 'About me',
            text: [
                'Systems engineer with extensive experience in web development from the user side, taking care of the user experience, responsive web design and software development life cycle.',
                'Now starting a new path learning Flutter and Golang.',
            ],
        },
        {
            title: 'Work experience',
            text: {
                title: 'Programming Analyst',
                place: 'Se Empeña',
                start: 'Jun 2022',
                end: 'Dec 2022',
                reference: 'A. Alejandro Gonzalez - Team leader - +505-7535-5967',
                text: '',
                list: [
                    {
                        icon: mdiReact,
                        text: 'React.js',
                    },
                    {
                        icon: mdiLanguageTypescript,
                        text: 'TypeScript',
                    },
                    {
                        icon: mdiSass,
                        text: 'SASS',
                    },
                    {
                        icon: mdiTailwind,
                        text: 'Tailwindcss',
                    },
                    {
                        icon: mdiNodejs,
                        text: 'Node.js',
                    },
                ],
            },
        },
    ];
</script>

<main class="content">
    <header class="personal">
        <h1>Steven Joseph Bustillo López</h1>

        <span>Full-stack TypeScript web developer</span>
    </header>

    {#each sections as section}
        <Section title={section.title} text={section.text} />
    {/each}
</main>

<style lang="scss">
    @import '$lib/styles';

    .content {
        @include flex;
        @include gap(all md);
        @include margin(y lg, right 2xl);
        grid-column: span 2;
    }

    .personal {
        @include flex;
        @include gap(all xs);
        @include margin(bottom md);
        text-align: center;

        & > h1 {
            @include font-color(50, primary);
            @include font-size(2xl);
            @include font-weight(60);
        }

        & > span {
            @include font-size(lg);
            @include font-weight(60);
        }
    }
</style>

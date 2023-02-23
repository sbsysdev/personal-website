<script lang="ts">
    import {
        mdiLanguageJava,
        mdiLanguageTypescript,
        mdiNodejs,
        mdiReact,
        mdiSass,
        mdiTailwind,
    } from '@mdi/js';
    import type { SectionListItem } from '../types';
    import Section from './Section.svelte';

    const sections: SectionListItem[] = [
        {
            title: 'About me',
            content: [
                'Systems engineer with extensive experience (+3 years) in web development from the user side, taking care of the user experience, responsive web design and software development life cycle.',
                'Now starting a new path learning English, Flutter and Golang.',
            ],
        },
        {
            title: 'Work experience',
            content: [
                {
                    title: 'Programming Analyst',
                    place: 'Se Empeña',
                    start: 'Jun 2022',
                    end: 'Dec 2022',
                    reference: 'A. Alejandro Gonzalez - Team leader - +505-7535-5967',
                    text: [
                        'I worked on the migration from a desktop system to web technologies. I supported the design of a module for internal chat implementing clean code on the backend.',
                        'I worked on the design and implementation of a restaurant order management system.',
                    ],
                    list: [
                        {
                            icon: mdiReact,
                            text: 'React.js',
                            percentage: 100,
                        },
                        {
                            icon: mdiLanguageTypescript,
                            text: 'TypeScript',
                            percentage: 100,
                        },
                        {
                            icon: mdiSass,
                            text: 'SASS',
                            percentage: 80,
                        },
                        {
                            icon: mdiTailwind,
                            text: 'Tailwindcss',
                            percentage: 20,
                        },
                        {
                            icon: mdiNodejs,
                            text: 'Node.js',
                            percentage: 20,
                        },
                        {
                            img: '/imgs/postgresql.svg',
                            icon: '',
                            text: 'PostgreSQL',
                            percentage: 20,
                        },
                    ],
                },
                {
                    title: 'Lead frontend developer',
                    place: 'Telo Group Inc.',
                    start: 'Nov 2021',
                    end: 'Jun 2022',
                    reference: 'A. Alejandro Gonzalez - Team leader - +505-7535-5967',
                    text: "In charge of developing the user interfaces designed by UI/UX and keeping track of development team's tasks (7 people). Always aware of the process and product development's status.",
                    list: [
                        {
                            icon: mdiReact,
                            text: 'React.js',
                            percentage: 100,
                        },
                        {
                            icon: mdiSass,
                            text: 'SASS',
                            percentage: 100,
                        },
                        {
                            icon: mdiNodejs,
                            text: 'Node.js',
                            percentage: 10,
                        },
                    ],
                },
                {
                    title: 'Full-stack developer',
                    place: 'EpicTech - DigitalReef',
                    start: 'Sep 2021',
                    end: 'Nov 2021',
                    reference: 'Erich Gonzalez - Team leader - +505-8649-7351',
                    text: 'In charge of developing the user interfaces designed by UI/UX.',
                    list: [
                        {
                            icon: mdiReact,
                            text: 'React.js',
                            percentage: 100,
                        },
                        {
                            icon: mdiLanguageTypescript,
                            text: 'TypeScript',
                            percentage: 100,
                        },
                        {
                            icon: mdiSass,
                            text: 'SASS',
                            percentage: 100,
                        },
                        {
                            icon: mdiLanguageJava,
                            text: 'JAVA',
                            percentage: 5,
                        },
                    ],
                },
            ],
        },
    ];
</script>

<main class="content">
    <header class="personal">
        <h1>Steven Joseph Bustillo López</h1>

        <span>Full-stack TypeScript web developer</span>
    </header>

    {#each sections as section}
        <Section title={section.title} content={section.content} />
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

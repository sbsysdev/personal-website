<script lang="ts">
    import {
        mdiAngular,
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
            title: 'Acerca de mí',
            content: [
                'Ingeniero de sistemas con amplia experiencia (+3 años) en desarrollo web desde el lado del usuario, cuidando la experiencia del usuario, el diseño web responsivo y el ciclo de vida del desarrollo de software.',
                'Ahora iniciando un nuevo camino aprendiendo inglés, Flutter y Golang.',
            ],
        },
        {
            title: 'Experiencia laboral',
            content: [
                {
                    title: 'Analista Programador',
                    place: 'Se Empeña',
                    start: 'junio 2022',
                    end: 'diciembre 2022',
                    reference: 'A. Alejandro Gonzalez - Líder del equipo - +505-7535-5967',
                    text: [
                        'Trabajé en la migración de un sistema de escritorio a tecnologías web. Apoyé en el diseño de un módulo para chat interno implementando código limpio en el backend.',
                        'Trabajé en el diseño e implementación de un sistema de gestión de pedidos a restaurantes.',
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
                            percentage: 90,
                        },
                        {
                            icon: mdiTailwind,
                            text: 'Tailwindcss',
                            percentage: 50,
                        },
                        {
                            icon: mdiNodejs,
                            text: 'Node.js',
                            percentage: 40,
                        },
                        {
                            img: '/imgs/postgresql.svg',
                            icon: '',
                            text: 'PostgreSQL',
                            percentage: 40,
                        },
                    ],
                },
                {
                    title: 'Desarrollador principal front-end',
                    place: 'Telo Group Inc.',
                    start: 'noviembre 2021',
                    end: 'junio 2022',
                    reference: 'A. Alejandro Gonzalez - Líder del equipo - +505-7535-5967',
                    text: 'A cargo de desarrollar las interfaces de usuario diseñadas por UI/UX y realizar un seguimiento de las tareas del equipo de desarrollo (7 personas). Siempre al tanto de los procesos y el estado del producto en desarrollo.',
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
                            percentage: 20,
                        },
                    ],
                },
                {
                    title: 'Desarrollador full-stack',
                    place: 'EpicTech - DigitalReef',
                    start: 'septiembre 2021',
                    end: 'noviembre 2021',
                    reference: 'Erich Gonzalez - Líder del equipo - +505-8649-7351',
                    text: 'A cargo de desarrollar las interfaces de usuario diseñadas por UI/UX.',
                    list: [
                        {
                            icon: mdiReact,
                            text: 'React.js',
                            percentage: 100,
                        },
                        {
                            icon: mdiAngular,
                            text: 'Angular',
                            percentage: 50,
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
                            percentage: 15,
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

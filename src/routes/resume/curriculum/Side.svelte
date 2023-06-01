<script lang="ts">
    import type { SideArticleGraphGroup, SideArticleListItem } from '../types';
    import SideArticle from './SideArticle.svelte';
    import {
        mdiAccountGroupOutline,
        mdiAccountTieVoiceOutline,
        mdiAngular,
        mdiDocker,
        mdiEmailOutline,
        mdiGit,
        mdiGithub,
        mdiHeadCogOutline,
        mdiLanguageGo,
        mdiLanguageTypescript,
        mdiLinkedin,
        mdiNodejs,
        mdiReact,
        mdiSass,
        mdiWhatsapp,
    } from '@mdi/js';

    const contacts: SideArticleListItem[] = [
        {
            icon: mdiEmailOutline,
            text: 'sb.sys.dev@gmail.com',
            redirect: 'mailto:sb.sys.dev@gmail.com',
        },
        {
            icon: mdiWhatsapp,
            text: '+505-8846-9784',
            redirect: 'https://wa.me/50588469784',
        },
        {
            icon: mdiLinkedin,
            text: 'in/steven-bustillo-85b4ba23b',
            redirect: 'https://www.linkedin.com/in/steven-bustillo-85b4ba23b/',
        },
        {
            icon: mdiGithub,
            text: 'sbsysdev',
            redirect: 'https://github.com/sbsysdev',
        },
    ];

    const softSkills: SideArticleListItem[] = [
        {
            icon: mdiHeadCogOutline,
            text: 'Pensamiento crítico',
        },
        {
            icon: mdiAccountGroupOutline,
            text: 'Trabajo en equipo',
        },
        {
            icon: mdiAccountTieVoiceOutline,
            text: 'Comunicación asertiva',
        },
        {
            icon: '',
            text: 'English A2',
            img: '/imgs/en.svg',
        },
    ];

    const technicalSkills: SideArticleGraphGroup[] = [
        {
            title: 'Frontend',
            graphs: [
                {
                    icon: mdiReact,
                    text: 'React.js',
                    percentage: 95,
                },
                {
                    icon: mdiAngular,
                    text: 'Angular',
                    percentage: 25,
                },
                {
                    icon: '',
                    img: '/imgs/sveltekit.svg',
                    text: 'SvelteKit',
                    percentage: 75,
                },
                {
                    icon: mdiSass,
                    text: 'SASS',
                    percentage: 95,
                },
            ],
        },
        {
            title: 'Mobile',
            graphs: [
                {
                    icon: '',
                    img: '/imgs/flutter.svg',
                    text: 'Flutter',
                    percentage: 40,
                },
            ],
        },
        {
            title: 'Backend',
            graphs: [
                {
                    icon: mdiNodejs,
                    text: 'Node.js',
                    percentage: 75,
                },
                {
                    icon: mdiLanguageGo,
                    text: 'Golang',
                    percentage: 40,
                },
                {
                    icon: '',
                    img: '/imgs/postgresql.svg',
                    text: 'PostgreSQL',
                    percentage: 70,
                },
            ],
        },
        {
            title: 'Others',
            graphs: [
                {
                    icon: mdiLanguageTypescript,
                    text: 'TypeScript',
                    percentage: 95,
                },
                {
                    icon: mdiGit,
                    text: 'Git(hub|lab)',
                    percentage: 75,
                },
                {
                    icon: mdiDocker,
                    text: 'Docker compose',
                    percentage: 80,
                },
            ],
        },
    ];
</script>

<div class="side">
    <img class="avatar" src="/imgs/logo.png" alt="avatar" />

    <ul class="articles">
        <li>
            <SideArticle title="Contactos" type="list" list={contacts} />
        </li>

        <li>
            <SideArticle title="Habilidades blandas" type="list" list={softSkills} />
        </li>

        <li>
            <SideArticle title="Habilidades técnicas" type="graph" graphs={technicalSkills} />
        </li>
    </ul>
</div>

<style lang="scss">
    @import '$lib/styles';

    .side {
        @include bg-color(l30);
        @include flex;
        @include gap(all md);
        @include padding(x md, y lg);
        overflow: hidden;
    }

    .avatar {
        @include margin(x 2xl element);
        @include padding(x md);
        max-width: 100%;
    }

    .articles {
        @include flex;
        @include gap(all md);

        & > li {
            @include flex;
            list-style: none;
        }
    }
</style>

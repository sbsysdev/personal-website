<script lang="ts">
    import type { SideArticleGraphGroup, SideArticleListItem } from '../types';
    import SideArticle from './SideArticle.svelte';
    import {
        mdiAccountGroupOutline,
        mdiAccountTieVoiceOutline,
        mdiDocker,
        mdiEmailOutline,
        mdiGit,
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
            redirect: 'mail://sb.sys.dev@gmail.com',
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
    ];

    const softSkills: SideArticleListItem[] = [
        {
            icon: mdiHeadCogOutline,
            text: 'Critical thinking',
        },
        {
            icon: mdiAccountGroupOutline,
            text: 'Teamwork',
        },
        {
            icon: mdiAccountTieVoiceOutline,
            text: 'Assertive communication',
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
                    percentage: 30,
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
                    percentage: 20,
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
                    percentage: 60,
                },
                {
                    icon: mdiDocker,
                    text: 'Docker compose',
                    percentage: 50,
                },
            ],
        },
    ];
</script>

<div class="side">
    <img class="avatar" src="/imgs/logo.png" alt="avatar" />

    <ul class="articles">
        <li>
            <SideArticle title="Contacts" type="list" list={contacts} />
        </li>

        <li>
            <SideArticle title="Soft skills" type="list" list={softSkills} />
        </li>

        <li>
            <SideArticle title="Technical skills" type="graph" graphs={technicalSkills} />
        </li>
    </ul>
</div>

<style lang="scss">
    @import '$lib/styles';

    .side {
        @include bg-color(l30);
        @include flex;
        @include gap(all 2xl);
        @include padding(x md, y lg);
        overflow: hidden;
    }

    .avatar {
        @include margin(x 2xl element);
        max-width: 100%;
    }

    .articles {
        @include flex;
        @include gap(all lg);

        & > li {
            @include flex;
            list-style: none;
        }
    }
</style>

<script lang="ts">
    import type { SideArticleGraphGroup, SideArticleListItem } from '../types';
    import SideArticle from './SideArticle.svelte';
    import {
        mdiAccountGroupOutline,
        mdiAccountTieVoiceOutline,
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
    ];

    const technicalSkills: SideArticleGraphGroup[] = [
        {
            title: 'Frontend',
            graphs: [
                {
                    icon: mdiReact,
                    text: 'React.js',
                    percentage: 98,
                },
                {
                    icon: '',
                    img: '/imgs/sveltekit.svg',
                    text: 'SvelteKit',
                    percentage: 90,
                },
                {
                    icon: mdiSass,
                    text: 'SASS',
                    percentage: 98,
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
                    percentage: 80,
                },
                {
                    icon: mdiLanguageTypescript,
                    text: 'TypeScript',
                    percentage: 98,
                },
                {
                    icon: mdiLanguageGo,
                    text: 'Golang',
                    percentage: 40,
                },
            ],
        },
        {
            title: 'Others',
            graphs: [
                {
                    icon: mdiGit,
                    text: 'Git(hub|lab)',
                    percentage: 70,
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
        @include bg-color(10);
        @include flex;
        @include gap(all xl);
        @include padding(x md, y lg);
        overflow: hidden;
    }

    .avatar {
        @include margin(x xl);
        max-width: 100%;
    }

    .articles {
        @include flex;
        @include gap(all xl);

        & > li {
            @include flex;
            list-style: none;
        }
    }
</style>

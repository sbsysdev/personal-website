export interface SideArticleListItem {
    icon: string | string[];
    text: string;
    redirect?: string;
    img?: string;
}

export interface SideArticleGraphItem extends SideArticleListItem {
    percentage: number;
}

export interface SideArticleGraphGroup {
    title: string;
    graphs: SideArticleGraphItem[];
}

export interface WorkExperience {
    title: string;
    place: string;
    start: string;
    end: string;
    reference: string;
    text: string | string[];
    list: SideArticleGraphItem[];
}

export interface SectionListItem {
    title: string;
    content: string | string[] | WorkExperience[];
}

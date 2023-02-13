export type LangActions = `actions.${
    | 'new'
    | 'save'
    | 'edit'
    | 'update'
    | 'themes'
    | 'light'
    | 'dark'
    | 'languages'
    | 'en'
    | 'es'}`;

export type LangAuth = `auth.${'' | ''}`;

export type LangDef = LangActions | LangAuth;

export type LangModules = 'actions' | 'auth';

import { writable } from 'svelte/store';
import type { AllowedLangs } from '../../app';
import { enActions, enAuth } from './en.lang';
import { esActions, esAuth } from './es.lang';
import type { LangDef, LangModules } from './lang-def';

const langModulesStrategy: Record<LangModules, Record<AllowedLangs, Record<string, string>>> = {
    actions: {
        en: enActions,
        es: esActions,
    },
    auth: {
        en: enAuth,
        es: esAuth,
    },
};

export const language = writable<Record<LangDef, string>>();

export function translation(module: LangModules, lang: AllowedLangs) {
    language.update(prev => ({ ...prev, ...langModulesStrategy[module][lang] }));
}

export function replace(sentence: string, ...props: (string | number)[]): string {
    return props.reduce((prev: string, current, index) => prev.replaceAll(`{${index}}`, current.toString()), sentence);
}

export function translate(stored: Record<string, string>, key: LangDef, ...props: (string | number)[]): string {
    const sentence = stored && stored[key];

    if (!sentence) return key;

    return replace(sentence, ...props);
}

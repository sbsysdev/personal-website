export type AllowedLangs = 'en' | 'es';
export type AllowedThemes = 'light' | 'dark';

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            lang: AllowedLangs;
            theme: AllowedThemes;
            user: undefined;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};

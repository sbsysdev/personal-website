export function portal<T extends HTMLElement>(element: T, target: T | string): { destroy(): void } {
    const parent: T | null =
        target instanceof HTMLElement ? target : typeof target === 'string' ? document.querySelector(target) : null;

    if (parent) parent.appendChild(element);

    return {
        destroy: () => element.parentNode && element.parentNode.removeChild(element),
    };
}

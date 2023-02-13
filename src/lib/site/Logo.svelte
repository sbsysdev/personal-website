<svg
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <defs>
        <mask id="sbsys-avatar-mask">
            <rect x="0" y="0" width="100" height="100" fill="white" />

            <path
                d="M 80 20 L 70 30 L 50 30 A 5 5 0 0 0 45 35 L 48 52 L 39 61 L 35 35 C 35 35 35 20 50 20"
                fill="black"
                stroke-width="0"
            />

            <path
                d="M 20 80 L 30 70 L 50 70 A 5 5 0 0 0 55 65 L 52 48 L 61 39 L 65 65 C 65 65 65 80 50 80"
                fill="black"
                stroke-width="0"
            />
        </mask>
    </defs>
    <ellipse class="sbsys-avatar" cx="50" cy="50" rx="50" ry="50" mask="url(#sbsys-avatar-mask)" />
</svg>

<style lang="scss">
    @import '$lib/styles';

    .sbsys-avatar {
        fill: rgb(palette(50, primary));
    }
</style>

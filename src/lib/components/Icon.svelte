<script lang="ts">
    export let path: string | string[] = '';
</script>

<svg viewBox="0 0 24 24">
    {#if typeof path === 'string'}
        <path fill="currentColor" d={path} />
    {/if}

    {#if Array.isArray(path)}
        <g>
            {#each path as line}
                <path fill="currentColor" d={line} />
            {/each}
        </g>
    {/if}
</svg>

<style>
    svg {
        height: 1em;
        width: 1em;
    }
</style>

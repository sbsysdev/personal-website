<script>
    import Content from './Content.svelte';
    import Side from './Side.svelte';
</script>

<div class="page curriculum">
    <Side />

    <Content />
</div>

<style lang="scss">
    @import '$lib/styles';

    .curriculum {
        @include gap(all lg);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>

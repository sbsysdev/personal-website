<script lang="ts">
    export let hasError: boolean = false;
</script>

<p class="field" data-has-error={hasError}>
    <slot name="title" />

    <span class="input">
        <slot name="before" />

        <slot name="input" />

        <slot name="after" />
    </span>

    <slot name="hint" />
</p>

<style lang="scss">
    @import '$lib/styles';

    .field {
        @include flex;

        & > .input {
            @include flex(row, center);

            & > :global([slot='input']) {
                flex-grow: 1;
                height: 100%;
                width: 0;
            }
        }
    }
</style>

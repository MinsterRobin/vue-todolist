<template>
    <button class="button" :class="{danger: danger}"><slot/></button>
</template>

<script>
    export default {
        name: "ButTon",
        props: {
            danger: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        gap: 6px;
        background-color: #2F80ED;
        padding: 20px 40px;
        max-width: min-content;
        white-space: nowrap;
        box-shadow: 0 2px 6px rgba(127, 177, 243, 0.4);
        border-radius: 12px;
        border: none;
        color: $color-background-primary;

        font: {
            family: $font-family-primary;
            weight: 600;
            size: $font-size-s;
        }
        cursor: pointer;
    }

    .danger {
        background-color: $color-danger;
    }
</style>
<template>
    <button class="button">{{text}}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        background-color: #2F80ED;
        padding: 20px 40px;
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
</style>
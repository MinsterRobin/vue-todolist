<template>
    <input class="input" type="text" :placeholder="placeholder">
</template>

<script>
    export default {
        name: "InputField",
        props: {
            placeholder: {
                type: String,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 12px 20px;
        width: 100%;

        &::placeholder {
            font: {
                family: $font-family-primary;
                weight: 400;
                size: $font-size-s;
            }
        }
    }
</style>
<template>
    <input
        class="input"
        type="text"
        :placeholder="placeholder"
        :value="value"
        :v-model="value"
        @input='$emit("update:value", $event.target.value)'>
</template>

<script>
    export default {
        name: "InputField",
        props: {
            placeholder: String,
            value: String
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
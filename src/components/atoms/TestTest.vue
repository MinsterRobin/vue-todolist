<template>
    <input
        type="checkbox"
        :v-model="value"
        @change='$emit("update", $event.target.checked)'
    />
</template>

<script>
    export default {
        name: "TestTest",
        props: {
            value: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
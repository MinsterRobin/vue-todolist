<template>
    <p><slot/></p>
</template>

<script>
    export default {
        name: "H1"
    }
</script>

<style lang="scss" scoped>
    p {
        font: {
            family: $font-family-secondary;
            weight: 700;
            size: $font-size-xxl;
        };
    }
</style>
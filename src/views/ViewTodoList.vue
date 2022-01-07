<template>
    <div class="test">
        <H1>#todo</H1>
        <Button text="Add"/>
        <InputField placeholder="gnagnagna"/>
    </div>

</template>

<script>
    import Button from "@/components/atoms/Button";
    import InputField from "@/components/atoms/InputField";
    import H1 from "@/components/atoms/H1";
    export default {
        name: "ViewTodoList",
        components: {H1, InputField, Button}
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "src/scss/main";

    .test {
        font: {
            family: $font-family-secondary;
            size: $font-size-l;
            weight: 600;
        }
    }
</style>
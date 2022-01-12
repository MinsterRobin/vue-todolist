<template>
    <div class="test">
        <H1>#todo</H1>
        <TodoList />
    </div>

</template>

<script>
    import H1 from "@/components/atoms/H1";
    import TodoList from "@/components/organisms/TodoList";
    export default {
        name: "ViewTodoList",
        components: {TodoList, H1}
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "src/scss/main";

    .test {
        display: flex;
        flex-direction: column;
        gap: 40px;
        font: {
            family: $font-family-secondary;
            size: $font-size-l;
            weight: 600;
        }
    }
</style>
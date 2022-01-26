<template>
    <div class="viewTodoList">
        <TypoH1>#todo</TypoH1>
        <TodoList />
    </div>
</template>

<script>
    import TypoH1 from "@/components/atoms/TypoH1";
    import TodoList from "@/components/organisms/TodoList";
    export default {
        name: "ViewTodoList",
        components: {TodoList, TypoH1}
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "src/scss/main";

    .viewTodoList {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;

        font: {
            family: $font-family-secondary;
            size: $font-size-l;
            weight: 600;
        }
    }
</style>
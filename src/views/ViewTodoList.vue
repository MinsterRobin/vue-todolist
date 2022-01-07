<template>
    <div class="test">
        <H1>#todo</H1>
        <TabsBar />
        <TaskAdder/>
        <Task/>
    </div>

</template>

<script>
    import H1 from "@/components/atoms/H1";
    import TabsBar from "@/components/molecules/TabsBar";
    import Task from "@/components/molecules/Task";
    import TaskAdder from "@/components/molecules/TaskAdder";
    export default {
        name: "ViewTodoList",
        components: {TaskAdder, Task, TabsBar, H1}
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
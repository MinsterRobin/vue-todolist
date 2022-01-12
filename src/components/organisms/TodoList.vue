<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder/>
        <Task task-text="C'est une tâche" :checked="true"/>
        <Task task-text="C'est une tâche" :checked="false"/>
    </div>
</template>

<script>
    import TabsBar from "@/components/molecules/TabsBar";
    import TaskAdder from "@/components/molecules/TaskAdder";
    import Task from "@/components/molecules/Task";
    export default {
        name: "TodoList",
        components: {Task, TaskAdder, TabsBar},
        methods: {
            completeTask(id) {
                console.log(id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .todolist {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
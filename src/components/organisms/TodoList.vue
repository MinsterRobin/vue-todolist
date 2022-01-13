<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder />
        <div v-for="(task, index) in getTasks" :key="index" class="todolist__tasks">
            <div>
                <TodoTask :task-text="task.content" :input-value="index" v-model:checked="task.completed" />
                <p>{{checked}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TabsBar from "@/components/molecules/TabsBar";
    import TaskAdder from "@/components/molecules/TaskAdder";
    import TodoTask from "@/components/molecules/TodoTask";

    export default {
        name: "TodoList",
        components: {TodoTask, TaskAdder, TabsBar},
        methods: {
            completeTask(id) {
                console.log(id);
            }
        },
        computed: {
            getTasks() {
                return this.$store.state.tasks;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .todolist {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__tasks {
            display: flex;
            flex-direction: column;
        }
    }
</style>
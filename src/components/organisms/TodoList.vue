<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder />
        <div v-for="(task, index) in getTasks" :key="index" class="todolist__tasks">
            <div>
                <TodoTask :task-text="task.content" :completed="task.completed" @update="completeTask($event, index)" />
                <p>{{task.completed}}</p>
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
        data() {
            return {
                task: {
                    content: "tâche 1",
                    completed: false,
                },
                returnValue: false,
            }
        },
        methods: {
            completeTask(e, taskIndex) {
                console.log(e);
                console.log(taskIndex);
                this.$store.commit('completeTask', {taskIndex: taskIndex, completed: e});
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
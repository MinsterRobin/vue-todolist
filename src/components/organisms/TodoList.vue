<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder @update="ok($event)" @add="addTask($event)"/>
        <div v-for="(task, index) in getFilteredTasks" :key="index" class="todolist__tasks">
            <div>
                <TodoTask :task-text="task.content" :completed="task.completed" @update="completeTask($event, index)" />
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
                this.$store.commit('completeTask', {taskIndex: taskIndex, completed: e});
            },
            addTask(taskContent) {
                this.$store.commit('addTask', taskContent);
            }
        },
        computed: {
            getFilteredTasks() {
                let tasks = this.$store.state.tasks;
                let filter = this.$store.state.activeFilter;

                switch (filter) {
                    case "All":
                        return tasks;
                    case "Active":
                        return tasks.filter(task => task.completed === false);
                    case "Completed":
                        return tasks.filter(task => task.completed === true);
                    default:
                        return tasks;
                }
            }

        },
    }
</script>

<style lang="scss" scoped>
    .todolist {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;

        &__tasks {
            display: flex;
            flex-direction: column;
        }
    }
</style>
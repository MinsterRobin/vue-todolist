<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder v-if="getActiveFilter !== 'Completed'" @update="ok($event)" @add="addTask($event)"/>
        <div class="todolist__tasks">
            <div v-for="(task) in getFilteredTasks" :key="task._id" >
                <div>
                    <TodoTask
                        :task-text="task.content"
                        :completed="task.completed"
                        @update="completeTask($event, task._id)"
                        :deleteMode="getActiveFilter === 'Completed'"
                        @delete="deleteTask(task._id)"
                    />
                </div>
            </div>
        </div>
        <ButTon
            @click="deleteAllTasks()"
            v-if="getActiveFilter === 'Completed'"
            danger
            class="todolist__delete-button">
            <TrashIcon class="todolist__trash-icon" color="#ffffff"/>
                delete all
        </ButTon>
    </div>
</template>

<script>
    import TabsBar from "@/components/molecules/TabsBar";
    import TaskAdder from "@/components/molecules/TaskAdder";
    import TodoTask from "@/components/molecules/TodoTask";
    import ButTon from "@/components/atoms/ButTon";
    import TrashIcon from "@/components/atoms/TrashIcon";

    export default {
        name: "TodoList",
        components: {TrashIcon, ButTon, TodoTask, TaskAdder, TabsBar},
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
            completeTask(e, taskId) {
                console.log(taskId);
                this.$store.commit('completeTask', {taskId: taskId, completed: e});
            },
            addTask(taskContent) {
                this.$store.commit('addTask', taskContent);
            },
            deleteTask(taskId) {
                // console.log(taskIndex);
                this.$store.commit('deleteTask', taskId);
            },
            deleteAllTasks() {
                this.$store.commit('deleteAllTasks');
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
            },
            getActiveFilter() {
                return this.$store.state.activeFilter;
            }

        },
    }
</script>

<style lang="scss" scoped>
    .todolist {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 18px;

        &__tasks {
            display: flex;
            gap: 27px;
            flex-direction: column;
        }

        &__delete-button {
            align-self: end;
        }

        &__trash-icon {
            height: 17px;
        }
    }
</style>
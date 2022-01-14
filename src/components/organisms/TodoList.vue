<template>
    <div class="todolist">
        <TabsBar />
        <TaskAdder />
        <div v-for="(task, index) in getTasks" :key="index" class="todolist__tasks">
            <div>
                <TodoTask :task-text="task.content" v-model:completed="task.completed" />
                <p>{{task.completed}}</p>
            </div>
        </div>
        <TestTest :value="returnValue" @update="ok($event, task.content)"/>
    </div>
</template>

<script>
    import TabsBar from "@/components/molecules/TabsBar";
    import TaskAdder from "@/components/molecules/TaskAdder";
    import TodoTask from "@/components/molecules/TodoTask";
    import TestTest from "@/components/atoms/TestTest";

    export default {
        name: "TodoList",
        components: {TestTest, TodoTask, TaskAdder, TabsBar},
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
            completeTask(id) {
                console.log(id);
            },
            ok(e, content) {
                console.log(e);
                console.log(content);
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
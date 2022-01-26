<template>
    <div class="task">
        <div class="task__content">
            <input
                class="task__checkbox"
                type="checkbox"
                :checked="completed"
                :v-model="completed"
                @change='$emit("update", $event.target.checked)' />
            <p class="task__text" v-bind:class="{task__textChecked: completed}">{{taskText}}</p>
        </div>
        <TrashIcon v-if="deleteMode" class="task__delete-button" color="#BDBDBD" @click="$emit('delete')" />
    </div>
</template>

<script>
    import TrashIcon from "@/components/atoms/TrashIcon";

    export default {
        name: "TodoTask",
        components: {TrashIcon},
        props: {
            taskText: {
                type: String,
                required: true
            },
            inputValue: String,
            completed: Boolean,
            deleteMode: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .task {
        display: flex;
        width: auto;
        align-items: center;
        justify-content: space-between;

        &__content {
            display: flex;
            gap: 7px;
        }

        &__text {
            font: {
                family: $font-family-primary;
                weight: 500;
                size: $font-size-l;
            }

            &Checked {
                text-decoration: line-through;
            }
        }

        &__checkbox {
            height: 24px;
            width: 24px;
        }

        &__delete-button {
            cursor: pointer;
            margin-right: 12px;
        }
    }
</style>
<template>
    <div class="task">
        <input class="checkbox" type="checkbox" v-model="checked">
        <p class="task__text" v-bind:class="{task__textChecked: checked}">{{taskText}}</p>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: {
            taskText: {
                type: String,
                required: true
            },
            checked: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
            },

        }
    }
</script>

<style lang="scss" scoped>
    .task {
        display: flex;
        width: auto;
        align-items: center;
        gap: 7px;

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
    }
</style>
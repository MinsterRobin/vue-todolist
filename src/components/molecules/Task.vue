<template>
    <div class="task">
        <Checkbox/>
        <p class="task__text" v-bind:class="{task__textChecked: checked}">{{count}}</p>
    </div>
</template>

<script>
    import Checkbox from "@/components/atoms/Checkbox";
    export default {
        name: "Task",
        components: {Checkbox},
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
            }
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
    }
</style>
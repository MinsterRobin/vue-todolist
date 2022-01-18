<template>
    <div class="task-adder">
        <InputField
            placeholder="add details"
            v-model:value="value"
        />
        <Button text="Add" @click="$emit('add', value)"/>
    </div>
</template>

<script>
    import InputField from "@/components/atoms/InputField";
    import Button from "@/components/atoms/Button";

    export default {
        name: "TaskAdder",
        components: {Button, InputField},
        data() {
            return {
                value: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .task-adder {
        width: 100%;
        display: flex;
        gap: 25px;
    }
</style>
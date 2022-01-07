<template>
    <div class="task-adder">
        <InputField placeholder="add details"/>
        <Button text="Add"/>
    </div>
</template>

<script>
    import InputField from "@/components/atoms/InputField";
    import Button from "@/components/atoms/Button";
    export default {
        name: "TaskAdder",
        components: {Button, InputField}
    }
</script>

<style lang="scss" scoped>
    .task-adder {
        width: 100%;
        display: flex;
        gap: 25px;
    }
</style>
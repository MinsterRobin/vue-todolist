<template>
    <div class="task-adder">
        <InputField
            placeholder="add details"
            v-model:value="value"
            @keyup.enter="$emit('add', value), value= ''"
        />
        <ButTon @click="$emit('add', value), value=''">Add</ButTon>
    </div>
</template>

<script>
    import InputField from "@/components/atoms/InputField";
    import ButTon from "@/components/atoms/ButTon";

    export default {
        name: "TaskAdder",
        components: {ButTon, InputField},
        data() {
            return {
                value: ""
            }
        },
        methods: {
            clearInputField () {
                this.value = "";
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
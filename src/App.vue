<template>
    <div class="container">
        <ViewTodoList />
    </div>
</template>

<script>
    import ViewTodoList from "@/views/ViewTodoList";
    export default {
        name: 'App',
        components: {
            ViewTodoList,
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "scss/main";
</style>

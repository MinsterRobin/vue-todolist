<template>
    <div class="tabsbar">
        <div class="tabsbar__titles">
            <p class="tabsbar__title">All</p>
            <p class="tabsbar__title">Active</p>
            <p class="tabsbar__title">Completed</p>
        </div>

        <div class="tabsbar__tab-selector-container">
            <div class="tabsbar__tab-selector"/>
            <div class="tabsbar__hr"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsBar"
    }
</script>

<style lang="scss" scoped>
    .tabsbar {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;

        &__titles {
            display: flex;
            justify-content: space-around;
            width: 100%;
        }

        &__title {
            cursor: pointer;

            font: {
                family: $font-family-primary;
                weight: 600;
                size: $font-size-s;
            }
        }

        &__tab-selector-container {
            position: relative;
        }

        &__tab-selector {
            z-index: 10;
            width: 90px;
            background-color: $color-primary;
            height: 4px;
            border-radius: 4px 4px 0 0;
        }

        &__hr {
            z-index: -1;
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 0;
            border-top: 1px solid $color-secondary;
        }
    }
</style>
<template>
    <div class="tabsbar">
        <div class="tabsbar__titles">
            <p class="tabsbar__title" @click="this.$store.commit('setActiveFilter', 'All')">All</p>
            <p class="tabsbar__title" @click="this.$store.commit('setActiveFilter', 'Active')">Active</p>
            <p class="tabsbar__title" @click="this.$store.commit('setActiveFilter', 'Completed')">Completed</p>
        </div>

        <div class="tab-selector">
            <div class="tab-selector__container">
                <transition-group name="translation">
                    <div :key="1" class="tab-selector__placeholder1" v-bind:class="getActiveFilter"/>
                    <div :key="2" class="tab-selector__placeholder2" v-bind:class="getActiveFilter"/>
                    <div :key="3" class="tab-selector__selector" v-bind:class="getActiveFilter"/>
                </transition-group>
            </div>
            <div class="tab-selector__hr"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsBar",
        computed: {
            getActiveFilter() {
                return this.$store.state.activeFilter;
            }
        }
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
            width: 90px;
            text-align: center;
            cursor: pointer;

            font: {
                family: $font-family-primary;
                weight: 600;
                size: $font-size-s;
            }
        }
    }

    .tab-selector {
        position: relative;

        &__container {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }

        &__hr {
            z-index: -1;
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 0;
            border-top: 1px solid $color-secondary;
        }

        &__selector {
            z-index: 10;
            width: 91px;
            background-color: $color-primary;
            height: 4px;
            border-radius: 4px 4px 0 0;
        }

        &__placeholder1, &__placeholder2 {
            z-index: 10;
            width: 90px;
            background-color: transparent;
            height: 4px;
            border-radius: 4px 4px 0 0;
        }

        .All {
            order: 1;
        }

        .Active {
            order: 2;
        }

        .Completed {
            order: 3;
        }

        &__placeholder1.All {
            order: 2;
        }

        &__placeholder2.All{
            order: 3;
        }

        &__placeholder1.Active {
            order: 1;
        }

        &__placeholder2.Active{
            order: 3;
        }

        &__placeholder1.Completed {
            order: 1;
        }

        &__placeholder2.Completed{
            order: 2;
        }
    }

    .translation-move {
        transition: transform .5s ease-out;
    }

</style>
<script setup lang="ts">
// Components
import Item from './Item.vue';

// Types
import type Latest from '../../../types/Latest';

defineProps({
    listings: {
        type: Array as () => Latest[],
        default: []
    },
    updateChartData: {
        type: Function,
        required: true
    }
});
</script>

<template>
    <div class="list">
        <Item v-for="item in listings" :data="item" :updateChartData="updateChartData"/>
    </div>
</template>

<style scoped lang="scss">
.list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
    overflow-y: scroll;
    max-height: calc(100vh - 41rem);
}
</style>
<script setup lang="ts">
// vue
import { ref } from 'vue';
import type { Ref } from 'vue';

// Types
import type Category from '../../../types/Category'; // nie wiem czemu nie działa @/types/Category.
import type Latest from '../../../types/Latest';

// Components
import Categories from './Categories.vue';
import List from './List.vue';

const categories: Ref<Category[]> = ref<Category[]>([
    {
        name: 'Summary',
        active: true
    },
    {
        name: 'Table'
    },
    {
        name: 'Charts'
    },
    {
        name: 'Reporting'
    },
    {
        name: 'Analysis'
    },
]);

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
function setActive(name: string) {
    categories.value = categories.value.map(category => {
        category.active = name == category.name;
        return category;
    });
}
</script>

<template>
    <div id="table">
        <Categories :categories="categories" :set-active="setActive"/>
        <List :listings="listings" :updateChartData="updateChartData"/>
    </div>
</template>

<style lang="scss">
#table {
    background-color: var(--element-background);
    border: 1px solid var(--element-border);
    border-radius: 0.5rem;
    padding: 2rem;

    @media (max-width: 600px) {
        max-width: 100%;
    }
}
</style>
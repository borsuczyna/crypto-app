<script setup lang="ts">
// Components
import Item from './Item.vue';

// Types
import type { CurrencyByIndex } from '@/types/Currency';

// Props
defineProps({
    favorites: {
        type: Array as () => number[],
        default: []
    },
    currenciesInfo: {
        type: Object as () => CurrencyByIndex,
        default: []
    }
})
</script>

<template>
    <div id="favorites">
        <div class="top-bar">
            Favorites
            <img src="/icons/dots-horizontal.svg" alt="more"/>
        </div>
        <div class="list">
            <div v-for="id in favorites" >
                <Item v-if="currenciesInfo[id]" :data="currenciesInfo[id]"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#favorites {
    margin-top: 2.5rem;
    margin-inline: 0.875rem;
}

.top-bar {
    font-size: 0.875rem;
    color: rgba(152, 150, 161, 1);
    display: flex;
    justify-content: space-between;
}

.list {
    max-height: auto;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-height: calc(100vh - 32rem);
}
</style>
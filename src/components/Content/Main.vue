<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

import Balance from './Balance.vue';
import Summary from './Summary.vue';
import Table from './Table/Main.vue';

// Types
import type Latest from '@/types/Latest';

import { randomChartData } from "@/services/randomChartData";

defineProps({
    listings: {
        type: Array as () => Latest[],
        default: []
    }
});

const chartData: Ref<number[]> = ref([]);
const chartLabels: Ref<string[]> = ref([]);
const isMobile: Ref<boolean> = ref(document.documentElement.clientWidth <= 600);
[chartData.value, chartLabels.value] = randomChartData(10, 0, 55000);

function updateChartData(data: number[]) {
    chartData.value = data;
}

function updateIsMobile() {
    isMobile.value = document.documentElement.clientWidth <= 600;
}

onMounted(() => {
    addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
    removeEventListener('resize', updateIsMobile);
});
</script>

<template>
    <div class="content">
        <div id="top-blocks">
            <Balance/>
            <Summary v-if="!isMobile" :chartData="chartData" :chartLabels="chartLabels"/>
            <Table v-if="isMobile" :listings="listings" :updateChartData="updateChartData"/>
        </div>
        <Summary v-if="isMobile" :chartData="chartData" :chartLabels="chartLabels"/>
        <Table v-if="!isMobile" :listings="listings" :updateChartData="updateChartData"/>
        <div v-if="isMobile" :style="{
            marginBottom: '0.5rem'
        }"></div>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: 2rem;
    gap: 2rem;
    max-height: calc(100vh - 9rem);
    
    @media (max-width: 960px) {
        max-height: calc(100vh - 9rem);
        overflow-y: scroll;
        width: calc(100vw - 18.5rem);
    }

    @media (max-width: 600px) {
        max-height: max-content;
        width: 100%;
        overflow-y: auto;
    }
}

#top-blocks {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 960px) {
        flex-wrap: wrap;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
}
</style>
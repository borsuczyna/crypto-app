<script setup lang="ts">
// vue
import { ref } from 'vue';
import type { Ref } from 'vue';

// Types
import type { Currency } from '@/types/Currency';

// Components
import Chart from '@/components/Chart.vue';
import { randomChartData } from '@/services/randomChartData';

defineProps({
    data: {
        type: Object as () => Currency | undefined,
        required: true
    }
});

// Computed
const chartData: Ref<number[]> = ref([]);
const chartLabels: Ref<string[]> = ref([]);
const descending: Ref<boolean> = ref(false);
[chartData.value, chartLabels.value, descending.value] = randomChartData(5);
</script>

<template>
    <div v-if="data" class="item">
        <div class="info">
            <img :src="data.logo" alt="icon"/>
            <div>
                <div class="symbol">{{ data.symbol }}</div>
                <div>{{ data.name }}</div>
            </div>
        </div>
        <div class="chart">
            <Chart :color="descending ? `rgba(45, 199, 143, 1)` : `rgba(234, 77, 77, 1)`" :data="chartData" :labels="chartLabels"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .info {
        display: flex;
        align-items: center;
        gap: 1.125rem;
        font-size: 0.75rem;

        & .symbol {
            color: rgba(152, 150, 161, 1);
        }

        & .name {
            font-weight: bolder;
        }
    }

    & img {
        width: 1.25rem;
        height: 1.25rem;
    }
}

.chart {
    height: 2rem;
    width: 4.5rem;
    margin-right: 0;
    margin-left: auto;
}
</style>
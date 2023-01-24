<script setup lang="ts">
import Chart from "../Chart.vue";

defineProps({
    chartData: Array as () => number[],
    chartLabels: Array as () => string[],
});
</script>

<template>
    <div class="block">
        <div class="top">
            <div class="name">Summary</div>
            <img src="/icons/dots-horizontal.svg" alt="more" class="more"/>
        </div>
        
        <div class="chart">
            <Chart :show-ticks="true" :data="chartData" :labels="chartLabels"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './Block.scss';

.last-month {
    display: flex;
    align-items: center;
    color: rgba(45, 199, 143, 1);
}

.buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 3.5rem;
}

.chart {
    height: 90%;
}
</style>
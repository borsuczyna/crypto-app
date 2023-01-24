<template>
    <Line :data="chartConfig.data" :options="chartConfig.options" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const props = defineProps({
    showTicks: Boolean,
    color: {
        type: String,
        default: 'rgba(116, 69, 251, 1)'
    },
    data: {
        type: Array as () => number[],
        default: []
    },
    labels: {
        type: Array as () => string[],
        default: ['']
    }
});

const chartConfig = computed(() => {
    return {
        options: {
            title: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: (
                    props.showTicks ? {
                        border: {
                            display: false
                        },
                        ticks: {
                            color: '#aaa'
                        },
                        grid: {
                            color: '#ccc'
                        },
                    } : {
                        display: false
                    }
                ),
                x: {
                    display: false
                }
            }
        },
        data: {
            labels: props.labels,
            datasets: [
                {
                    label: 'Summary',
                    tension: 0.4,
                    backgroundColor: props.color,
                    borderColor: props.color,
                    pointRadius: 0,
                    data: props.data,
                }
            ]
        }
    }
});
</script>
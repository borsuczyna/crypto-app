<script setup lang="ts">
// vue
import { computed, ref } from '@vue/reactivity';
import type { Ref } from 'vue';

// Components
import Button from '../Button.vue';
import Chart from '@/components/Chart.vue';

// Services
import uris from '@/services/uris';
import { randomChartData } from '@/services/randomChartData';

// Types
import type Latest from '../../../types/Latest';

const props = defineProps({
    data: {
        type: Object as () => Latest,
        default: []
    },
    updateChartData: {
        type: Function,
        required: true
    }
});

function beautifyPrice(price: number): string {
    const priceString = price.toString();
    const decimalIndex = priceString.indexOf('.');
    const decimalPart = priceString.substring(decimalIndex, decimalIndex + 3);
    const integerPart = priceString.substring(0, decimalIndex).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${integerPart}${decimalPart}`;
}

const computedLogo = computed(() => {
    return uris.icon.replace('<id>', props.data.id+'');
});

const computedPrice = computed(() => {
    return `$${beautifyPrice(props.data.quote.USD.price)}`;
});

const chartData: Ref<number[]> = ref([]);
const chartLabels: Ref<string[]> = ref([]);
const descending: Ref<boolean> = ref(false);
const change: Ref<number> = ref(0);
[chartData.value, chartLabels.value, descending.value, change.value] = randomChartData(10);

const computedChange = computed(() => {
    let symbol: string = change.value > 0 ? '+' : '-';
    return `${symbol} ${Math.abs(change.value).toFixed(2)}%`;
});

function selectCurrency() {
    props.updateChartData(chartData.value);
}
</script>

<template>
    <div class="item" :onclick="selectCurrency">
        <img :src="computedLogo" alt="" class="logo">

        <div class="data">
            <div class="info">
                <div class="gray">{{ data.symbol }}</div>
                <div class="bold">{{ data.name }}</div>
            </div>
            <div class="info">
                <div class="gray">Price</div>
                <div class="bold">{{ computedPrice }}</div>
            </div>
            <div class="info">
                <div class="gray">Change</div>
                <div :class="['bold', change > 0 ? 'increasing' : 'descending']">{{ computedChange }}</div>
            </div>
            <div class="info chart">
                <Chart :color="descending ? `rgba(45, 199, 143, 1)` : `rgba(234, 77, 77, 1)`" :data="chartData" :labels="chartLabels"/>
            </div>
        </div>

        <div class="buttons">
            <Button text="Sell"/>
            <Button text="Buy" background="rgba(116, 69, 251, 1)" color="rgba(255, 255, 255, 1)" background-hover="rgba(136, 69, 251, 1)"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 220, 220, 0);
    border-radius: 0.5rem;
    padding-right: 1rem;
    transition: 0.1s;
    cursor: pointer;
    
    &:hover {
        background-color: rgb(239, 239, 239);
        border: 1px solid rgb(220, 220, 220);
    }
}

.logo {
    width: 3rem;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(235, 235, 243, 1);
    border-radius: 50%;
    padding: 0.5rem;
}

.buttons {
    display: flex;
    gap: 0.5rem;
}

.data {
    display: flex;
    align-items: left;
    flex-grow: 1;
    justify-content: space-between;
    overflow-x: hidden;
    @media (max-width: 600px) {
        gap: 0.5rem;
    }
}

.increasing {
    color: rgba(45, 199, 143, 1);
}

.descending {
    color: rgba(234, 77, 77, 1);
}

.info {
    font-size: 0.825rem;
    width: 15%;
    overflow-x: hidden;

    @media (max-width: 600px) {
        flex-grow: 1;
    }

    &.chart {
        height: 2.5rem;
        width: 25%;
        max-width: 10rem;

        @media (max-width: 600px) {
            display: none;
        }
    }

    & .gray {
        color: rgba(152, 150, 161, 1);  
    }

    & .bold {
        font-weight: 600;
    }
}
</style>
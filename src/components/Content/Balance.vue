<script setup lang="ts">
// Components
import Button from './Button.vue';
</script>

<template>
    <div class="block">
        <div class="top">
            <div class="name">Current Balance</div>
            <img src="/icons/dots-horizontal.svg" alt="more" class="more"/>
        </div>
        <div class="balance"><div class="dollar">$</div>21 432.23</div>

        <div class="last-month">
            <img src="/icons/arrow.svg" alt="arrow icon">
            12% vs last month
        </div>

        <div class="buttons">
            <Button text="Quick Invest" background="rgba(116, 69, 251, 1)" color="rgba(255, 255, 255, 1)" background-hover="rgba(136, 69, 251, 1)"/>
            <Button text="Show Report"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './Block.scss';

.balance {
    margin-top: 1.5rem;
    
    display: flex;
    
    font-family: 'SF Pro Display';
    font-weight: 500;
    font-size: 3.5rem;
    line-height: 3.5rem;

    & .dollar {
        color: rgba(152, 150, 161, 1);
        font-weight: 100;
    }
}

.last-month {
    color: rgba(45, 199, 143, 1);
    
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 3.5rem;
}
</style>
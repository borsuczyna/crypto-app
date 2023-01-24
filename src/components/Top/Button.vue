<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    onclick: {
        type: Function,
        default: () => {}
    }
});

const computedIcon = computed(() => {
    return `/icons/${props.icon}.svg`;
});
</script>

<template>
    <button :onclick="onclick">
        <img :src="computedIcon"/>
    </button>
</template>

<style scoped lang="scss">
button {
    border: none;
    outline: none;

    height: 100%;
    aspect-ratio: 1/1;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--element-background);
    border: 1px solid var(--element-border);
    color: rgba(152, 150, 161, 1);
    border-radius: 0.5rem;
    
    cursor: pointer;

    transition: 0.1s;

    &:hover {
        background-color: rgb(233, 233, 233);
    }
}
</style>
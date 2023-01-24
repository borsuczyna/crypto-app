<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps({
    background: {
        type: String,
        default: 'rgba(255, 255, 255, 1)'
    },
    backgroundHover: {
        type: String,
        default: 'rgba(245, 245, 245, 1)'
    },
    border: {
        type: String,
        default: 'rgba(235, 235, 243, 1)'
    },
    color: {
        type: String,
        default: 'rgba(116, 69, 251, 1)'
    },
    text: {
        type: String,
        required: true
    }
});

const computedStyle = computed(() => {
    return {
        backgroundColor: props.background,
        border: `1px solid ${props.border}`,
        color: props.color,
        '--hover-color': props.backgroundHover
    };
});
</script>

<template>
    <button :style="computedStyle">
        {{ text }}
    </button>
</template>

<style scoped lang="scss">
button {
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    
    font-weight: 600;
    font-size: 0.875rem;

    cursor: pointer;

    transition: 0.1s;
    
    &:hover {
        background-color: var(--hover-color) !important;
    }
}
</style>
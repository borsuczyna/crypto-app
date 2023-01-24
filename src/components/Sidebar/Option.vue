<script setup lang="ts">
// vue
import { computed } from '@vue/reactivity';
import type { ComputedRef } from 'vue';

// Types
import type Option from '@/types/Option';

// Props
const props = defineProps({
    data: {
        type: Object as () => Option,
        default: {}
    }
});

const computedPath: ComputedRef<string> = computed<string>(() => {
    return props.data.path;
});
</script>

<template>
    <RouterLink :class="['option', 'noselect', data.active && 'active']" :to="computedPath">
        <img :src="`/icons/${data.icon}.svg`" :alt="data.icon" class="icon">
        <span class="name">{{ data.name }}</span>

        <div v-if="data.notifications && data.notifications > 0" class="notifications">{{ data.notifications > 9 ? '9+' : data.notifications }}</div>
    </RouterLink>
</template>

<style lang="scss">
.option {
    width: 15.25rem;
    height: 2.75rem;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;

    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.75rem;

    color: var(--option-inactive);
    background-color: var(--option-background);
    border: 1px solid var(--option-background);
    
    font-weight: 500;

    cursor: pointer;
    transition: background-color 0.1s, border 0.1s, color 0.1s, filter 0.1s;

    &.active {
        background-color: var(--option-active-background);
        border: var(--option-active-border);
        color: var(--option-active);
        font-weight: 600;
    }

    &:hover {
        background-color: var(--option-hover-background);
        border: var(--option-hover-border);
    }

    & .icon {
        // pusty filter, żeby było smooth
        filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(245deg) brightness(0%) contrast(0%);
        transition: 0.2s;
    }

    &.active .icon {
        filter: invert(27%) sepia(52%) saturate(3468%) hue-rotate(245deg) brightness(78%) contrast(81%);
    }
}

.notifications {
    background-color: var(--notifications-background);
    color: var(--notifications-color);
    margin-inline: auto 0;
    padding: 0 0.4rem;
    font-size: 0.65rem;
    font-weight: 5400;
    border-radius: 0.625rem;
}
</style>
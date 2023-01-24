<script setup lang="ts">
// Components
import Option from './Option.vue';

// Types
import type OptionType from '@/types/Option';

// Props
defineProps({
    options: {
        type: Array as () => OptionType[],
        default: []
    }
})
</script>

<template>
    <div id="sidebar-options">
        <Option v-for="option in options" :data="option"/>
    </div>
</template>

<style lang="scss">
#sidebar-options {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>
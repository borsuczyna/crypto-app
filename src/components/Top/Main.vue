<script setup lang="ts">
import Button from './Button.vue';
import Search from './Search.vue';

defineProps({
    toggleMenu: {
        type: Function,
        required: true
    }
});
</script>

<template>
    <div id="top">
        <Search/>
        <div class="buttons">
            <Button icon="alert"/>
            <Button icon="hamburger" :onclick="toggleMenu"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
#top {
    display: flex;
    justify-content: space-between;
}

.buttons {
    display: flex;
    transform: translateX(-35%);
    gap: 0.5rem;
}
</style>
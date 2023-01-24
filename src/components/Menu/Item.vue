<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    onclick: {
        type: Function,
        required: false
    },
});
</script>

<template>
    <div class="item" :onclick="onclick">{{ text }}</div>
</template>

<style scoped lang="scss">
.item {
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(25, 25, 25, 0.05);
    color: rgb(104, 104, 104);
    border-radius: 0.5rem;
    transition: 0.1s;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(237, 237, 237, 0.4);
        color: rgb(18, 18, 18);
        border: 1px solid rgba(25, 25, 25, 0.1);
    }
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

// Components
import Item from './Item.vue';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },
    toggleMenu: {
        type: Function,
        default: () => {}
    }
});

interface MenuElement {
    text: string;
    onClick?: CallableFunction;
};

const menus: Ref<MenuElement[]> = ref<MenuElement[]>([
    {
        text: 'My profile'
    }, 
    {
        text: 'Settings',
    },
    {
        text: 'Privacy',
    },
    {
        text: 'Log out',
    },
    {
        text: 'Close',
        onClick: props.toggleMenu
    }
]);
</script>

<template>
    <div id="menu" :class="[visible && 'active']">
        <Item v-for="item of menus" :text="item.text" :onclick="item.onClick || (() => {})"/>
    </div>
</template>

<style scoped lang="scss">
#menu {
    display: flex;
    background: linear-gradient(45deg, rgba(140, 138, 138, 0.3), rgba(221, 221, 221, 0.3));
    flex-direction: column;
    gap: 0.25rem;
    position: fixed;
    right: 0;
    top: 0;
    height: 100dvh;
    padding: 1rem;
    min-width: 20rem;
    backdrop-filter: blur(1rem) brightness(90%);
    transform: translateX(100%);
    transition: ease-in-out 0.5s;
    opacity: 0;
    
    &.active {
        transform: translateX(0%);
        opacity: 1;
    }

    @media (max-width: 600px) {
        width: 100vw;
        backdrop-filter: blur(1rem) brightness(80%);
    }
}
</style>
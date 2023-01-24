<script setup lang="ts">
// vue
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

// Components
import Top from '@/components/Top/Main.vue';
import Content from '@/components/Content/Main.vue';
import Menu from '@/components/Menu/Main.vue';

// Types
import type Latest from '@/types/Latest';

// Services
import { getLatestListings } from '@/services/latest';

const latestListings: Ref<Latest[] | undefined> = ref(undefined);

onMounted(async () => {
    try {
        latestListings.value = await getLatestListings();
    } catch(e) {}
});

const menuVisible: Ref<boolean> = ref<boolean>(false);

function toggleMenu() {
    menuVisible.value = !menuVisible.value;
}
</script>

<template>
    <Top :toggleMenu="toggleMenu"/>
    <Content :listings="latestListings"/>
    <Menu :visible="menuVisible" :toggleMenu="toggleMenu"/>
</template>
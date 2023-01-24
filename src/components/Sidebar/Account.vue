<script setup lang="ts">
// Types
import type Account from '@/types/Account';

// Props
defineProps({
    account: {
        type: Object as () => Account | undefined
    }
})
</script>

<template>
    <div class="account" v-if="account">
        <div class="left">
            <img :src="account.avatar" alt="" class="avatar">
            <div class="info">
                <div class="name">{{ account.name }}</div>
                <div class="email">{{ account.email }}</div>
            </div>
        </div>
        <img src="/icons/dots-horizontal.svg" alt="more" class="more"/>
    </div>
</template>

<style scoped lang="scss">
.account {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}

.left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name {
    font-weight: 600;
}

.email {
    font-weight: 400;
    color: rgba(152, 150, 161, 1);
}

.avatar {
    width: 2.5rem;
}

.more {
    width: 1.5rem;
}
</style>
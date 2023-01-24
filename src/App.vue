<script setup lang="ts">
// vue
import { onMounted, computed, ref } from 'vue';
import type { ComputedRef, Ref } from 'vue';

// routes
import router from '@/router/index';

// Components
import Sidebar from './components/Sidebar/Main.vue';
import { RouterView } from 'vue-router'

// Types
import type Option from '@/types/Option';
import type { Currency, CurrencyByIndex } from '@/types/Currency';
import type Account from './types/Account';

// Services
import { getFavorites } from './services/favorite';
import { getAccount } from './services/account';
import { getCurrencyInfo } from './services/info';

// Options
const options: Ref<Option[]> = ref<Option[]>([
    {
        name: 'Overview',
        icon: 'home',
        path: '/'
    },
    {
        name: 'Buy / Sell',
        icon: 'bank',
        path: '/buysell'
    },
    {
        name: 'Wallets',
        icon: 'wallet',
        path: '/wallet'
    },
    {
        name: 'Bundles',
        icon: 'check-verified',
        path: '/bundles',
        notifications: 32
    },
    {
        name: 'Reporting',
        icon: 'flag',
        path: '/flag'
    },
    {
        name: 'Community',
        icon: 'atom',
        path: '/atom'
    },
]);

const commputedOptions: ComputedRef<Option[]> = computed(() => {
    return options.value.map(option => {
        option.active = router.currentRoute.value.path == option.path;

        option.notifications = option.active ? 0 : option.notifications;

        return option;
    });
});

const currenciesInfo: Ref<CurrencyByIndex> = ref({});

// Methods
async function loadCurrenciesInfo(...args: number[]) {
    for(let id of args) {
        if(currenciesInfo.value[id] && currenciesInfo.value[id] != undefined) continue;

        let data: Currency | undefined = await getCurrencyInfo(id);
        if(data) {
            currenciesInfo.value[id] = data;
        }
    }
}

// Fetch data from services
const favorites: Ref<number[]> = ref<number[]>([]);
const account: Ref<Account> = ref<Account>({
    name: '',
    email: '',
    avatar: 'avatar'
});

onMounted(async () => {
    try {
        favorites.value = await getFavorites();
        account.value = await getAccount();

        for(let id of favorites.value) {
            loadCurrenciesInfo(id);
        }
    } catch(e) {}
});
</script>

<template>
    <Sidebar :account="account" :options="commputedOptions" :favorites="favorites" :currenciesInfo="currenciesInfo"/>

    <div id="content">
        <RouterView />
    </div>
</template>

<style lang="scss">
#app {
    display: flex;
    height: 100vh;
    overflow: hiden;
}

#content {
    width: 100%;
    padding: 3rem 4.25rem;

    @media (max-width: 950px) {
        padding: 1rem;
    }
}
</style>
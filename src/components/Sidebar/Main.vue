<script setup lang="ts">
// Components
import Logo from './Logo.vue';
import Options from './Options.vue';
import Favorites from './Favorites/Main.vue';
import Account from './Account.vue';

// Types
import type Option from '@/types/Option';
import type { CurrencyByIndex } from '@/types/Currency';
import type AccountType from '@/types/Account';

// Props
defineProps({
    options: {
        type: Object as () => Option[],
        default: []
    },
    favorites: {
        type: Array as () => number[],
        default: []
    },
    currenciesInfo: {
        type: Object as () => CurrencyByIndex,
        default: []
    },
    account: {
        type: Object as () => AccountType | undefined,
        required: true
    }
});
</script>

<template>
    <div id="sidebar">
        <Logo/>
        <Options :options="options"/>
        <div class="space">
            <Favorites :favorites="favorites" :currenciesInfo="currenciesInfo"/>
            <Account :account="account"/>
        </div>
    </div>
</template>

<style lang="scss">
#sidebar {
    display: flex;
    flex-direction: column;
    background: var(--sidebar-background);
    width: var(--sidebar-width);
    padding: 0.625rem;
}

.space {
    display: flex;
    flex-direction: column;
    height: auto;
    flex-grow: 1;
    justify-content: space-between;
    align-content: space-between;
}

@media (max-width: 600px) {
    body {
        #sidebar {
            display: none;
        }
    }
}
</style>
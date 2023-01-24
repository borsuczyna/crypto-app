<script setup lang="ts">
// Components
import type Category from '@/types/Category';

// Props
const props = defineProps({
    categories: {
        type: Array as () => Category[],
        default: []
    },
    setActive: Function
});

function activate(name: string) {
    if(props.setActive) props.setActive(name);
}
</script>

<template>
    <div class="categories">
        <div v-for="category of categories" :class="['category', category.active && 'active']" :onclick="() => activate(category.name)">{{ category.name }}</div>
    </div>
    <hr/>
</template>

<style scoped lang="scss">
.categories {
    display: flex;
    color: rgba(152, 150, 161, 1);
    gap: 0.5rem;
    font-weight: 400;

    flex-wrap: wrap;

    & .category {
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 0.25rem;
        transition: 0.2s;

        &:hover {
            background: linear-gradient(to top, rgb(173, 173, 173) 2px, rgba(116, 69, 251, 0) 2px);
        }
        
        &.active {
            color: black;
            font-weight: 500;
            background: linear-gradient(to top, rgba(116, 69, 251, 1) 3px, rgba(116, 69, 251, 0) 3px);
        }
    }
}

hr {
    margin-top: 0.2rem;
    border: .5px solid rgba(235, 235, 243, 1);
}

@media (max-width: 600px) {
    .category {
        flex-grow: 1;
        text-align: center;
    }
}
</style>
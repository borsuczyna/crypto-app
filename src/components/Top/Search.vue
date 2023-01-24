<template>
    <div class="search">
        <img src="/icons/search.svg" alt="search icon"/>
        <input type="text" placeholder="Search">
    </div>
</template>

<style lang="scss">
.search {
    background-color: var(--element-background);
    border: 1px solid var(--element-border);
    color: rgba(152, 150, 161, 1);

    padding: 0.75rem 1.125rem;
    border-radius: 0.5rem;
    
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.625rem;
    
    min-width: 14.5rem;
    margin-right: 2rem;

    transition: border-radius 0.2s;
}

input {
    color: rgba(152, 150, 161, 1);
    background: none;

    border: none;
    outline: none;

    font-size: 0.875rem;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
}

.search:focus-within {
    border-radius: 2rem;
}

::-ms-input-placeholder { color: rgba(152, 150, 161, 1); }
::-ms-input-placeholder { color: rgba(152, 150, 161, 1); }
::placeholder { color: rgba(152, 150, 161, 1); }

@media (max-width: 600px) {
    .search {
        flex-grow: 1;
        min-width: 0;
        width: auto;
    }
}
</style>
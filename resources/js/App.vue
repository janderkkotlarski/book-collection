<script lang="ts">
// import Navigate from './NaviGate.vue';

// <nav>
//         <router-link :to="{name: 'books.overview'}">Boeken Overzicht</router-link> |
//         <router-link :to="{name: 'books.create'}">Nieuw Boek</router-link> | 
//         <router-link :to="{name: 'authors.overview'}">Auteurs Overzicht</router-link>
//     </nav>
</script>

<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw Boek Toevoegen</RouterLink> | 
        <RouterLink :to="{name: 'authors.overview'}">Auteurs Overzicht</RouterLink>
    </nav>
    
    <router-view></router-view>
</template>
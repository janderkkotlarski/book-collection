<script lang="ts">
</script>

<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw Boek Toevoegen</RouterLink> | 
        <RouterLink :to="{name: 'authors.overview'}">Auteurs Overzicht</RouterLink> | 
        <RouterLink :to="{name: 'authors.create'}">Nieuwe Auteur Toevoegen</RouterLink> | 
    </nav>

    <router-view>        
    </router-view>    
</template>
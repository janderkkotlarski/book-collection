<script lang="ts"></script>

<template>
    <div>Navigate</div>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw Boek Toevoegen</RouterLink> | 
        <RouterLink :to="{name: 'authors.overview'}">Auteurs Overzicht</RouterLink>
    </nav>
</template>
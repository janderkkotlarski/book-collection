<script setup lang="ts">
// import { onMounted } from 'vue';
import { authorStore, getAllAuthors, deleteAuthor } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';

// Need to import the data to get error bag refreshing
authorStore.actions.getAll();
</script>

<template>
    <ErrorMessage />

    <table>
        <tr>
            <th>Name</th>
        </tr>

        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteAuthor(author.id)">Verwijder</button></td>
        </tr>        
    </table>
</template>
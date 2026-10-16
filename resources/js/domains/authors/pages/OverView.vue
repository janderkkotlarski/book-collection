<script setup lang="ts">
// import { onMounted } from 'vue';
import { authorStore, getAllAuthors, deleteAuthor } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';

authorStore.actions.getAll();
</script>

<template>
    <ErrorMessage />

    <table>
        <tr>
            <th>Name</th>
        </tr>
        <!-- Because of Json resource management, these three warnings exist, though the code works well-->
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteAuthor(author.id)">Verwijder</button></td>
        </tr>

        
    </table>
</template>
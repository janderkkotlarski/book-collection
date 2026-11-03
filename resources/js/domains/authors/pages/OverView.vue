<script setup lang="ts">
// import { onMounted } from 'vue';
import { authorStore } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';

// Need to import the data to get error bag refreshing
authorStore.actions.getAll();

const authors = authorStore.getters.all;

const deleteAuthor = async (id: number) => {
    await authorStore.actions.delete(id);
};
</script>

<template>
    <ErrorMessage />

    <table>
        <tr>
            <th>Name</th>
        </tr>

        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteAuthor(author.id)">Verwijder</button></td>
        </tr>        
    </table>
</template>
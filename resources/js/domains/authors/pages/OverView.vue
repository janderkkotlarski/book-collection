<script setup lang="ts">
import { onMounted } from 'vue';
import { getAllAuthors, fetchAuthors, deleteAuthor } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

fetchAuthors;

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

            <FormError name="author.name" />
        </tr>

        
    </table>
</template>
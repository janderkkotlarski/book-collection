<script setup lang="ts">
// import { onMounted } from 'vue';
import { bookStore } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';

// Import data for the bookstore
bookStore.actions.getAll();

const books = bookStore.getters.all;

const deleteBook = async (id: number) => {
    await bookStore.actions.delete(id);
};
</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <!-- getAllBooks is the container used to store the books locally -->
        <tr v-for="book in books" :key="book.id">
            <!-- Because of Json resource management, these three warnings exist, though the code works well-->
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{ name: 'books.show', params: { id: book.id } }">Bekijk</RouterLink></td>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteBook(book.id)">Verwijder</button></td>
        </tr>
    </table>

    <ErrorMessage />
</template>
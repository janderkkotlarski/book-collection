<script setup lang="ts">
import { onMounted } from 'vue';
import { getAllBooks, fetchBooks, deleteBook } from '../store';

fetchBooks;

</script>



<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <!-- Because of Json resource management, these three warnings exist, though the code works well-->
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteBook(book.id)">Verwijder</button></td>
        </tr>
    </table>
</template>
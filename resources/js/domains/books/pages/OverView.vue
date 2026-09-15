<script setup>
import { onMounted, ref } from 'vue';
import { getAllBooks, fetchBooks } from '../store';

fetchBooks();

const allBooks = getAllBooks;
</script>



<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.name }}</td>
            <td>{{ book.summary }}</td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { getAllBooks, fetchBooks } from '../store';

fetchBooks();

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
        </tr>
    </table>
</template>
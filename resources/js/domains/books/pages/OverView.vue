<script setup lan>
import { onMounted, ref } from 'vue';
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
        <tr v-for="Book in getAllBooks" :key="Book.id">
            <td>{{ Book.title }}</td>
            <td>{{ Book.summary }}</td>
        </tr>
    </table>

    <br />
    <br />

    {{ getAllBooks }}

    
</template>
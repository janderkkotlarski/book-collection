<script setup lang="ts">
import { onMounted } from 'vue';
import { getAllBooks, getAllBooks_, fetchBooks, fetchBooks_ } from '../store';

import { bookStore } from '../store';

const addBook = async () => {
    await bookStore.actions.create({ title: 'Nieuw Boek', author: 'Auteur X' });
    // code...
};

const updateBook = async (id) => {
    await bookStore.actions.update(id, { title: 'Aangepast Boek' });
    // code...
};

// const deleteBook = async (id) => {
//     await bookStore.actions.delete(id);
//     // code...
// };

const books = fetchBooks_;

// Waarbij 1 het ID is van het boek dat je wilt ophalen uit de state
const book = bookStore.getters.getById(1);

bookStore.actions.getAll();

fetchBooks();

fetchBooks_;

</script>



<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <!-- Because of Json resource management, these three warnings exist, though the code works well-->
        <tr v-for="book in getAllBooks_" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink></td>
            <td><button @click="deleteBook(book.id)">Verwijder</button></td>
        </tr>
    </table>

    {{ books }}
</template>
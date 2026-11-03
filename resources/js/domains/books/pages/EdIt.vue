<script setup lang="ts">
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { Book, bookStore } from '../store';

const route = useRoute();
const router = useRouter();

bookStore.actions.getAll();

const bookId = Number(route.params.id);

const book = bookStore.getters.getById(bookId);

// When working with axios and asynchronous do use await
const handleSubmit = async (data: Book) => {
    await bookStore.actions.update(bookId, data);
    router.push({ name: 'books.overview' });
};
</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>
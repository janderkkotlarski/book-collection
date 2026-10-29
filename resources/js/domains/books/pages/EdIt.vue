<script setup>
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { getBookById, updateBook } from '../store';

const route = useRoute();
const router = useRouter();

// const book = getBookById(route.params.id);

const bookId = Number(route.params.id);

const book = getBookById(bookId);

// When working with axios and asynchronous do use await
const handleSubmit = async (data) => {
    await updateBook(bookId, data);
    console.log(typeof data);
    router.push({ name: 'books.overview' });
};
</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Form from '../components/Form.vue';
import { Book, createBook } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const book = ref({
    author_id: null,
    title: '',
    summary: ''
});

const handleSubmit = async (data: Book) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};
</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>
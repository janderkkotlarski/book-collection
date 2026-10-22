<script setup>
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBookById, updateBook } from '../store';

const route = useRoute();
const router = useRouter();

const book = getBookById(route.params.id);

// When working with axios and asynchronous do use await
// const handleSubmit = async (data) => {
//     await updateBook(route.params.id, data);
//     router.push({ name: 'books.overview' });
// };

// <h2>Boek bewerken</h2>
//       <Form v-if="book" :book="book" @submit="handleSubmit" />
</script>

<template>
    <br />
    <div>
       <b>[Titel]</b>
       <br />
       {{ book.title }}
    </div>
    <br />
    <div>
       <b>[Samenvatting]</b>
       <br />
       {{ book.summary }}
    </div>
</template>
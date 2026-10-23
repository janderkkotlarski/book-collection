<script setup>
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBookById } from '../store';
import { getAuthorById } from '../../authors/store';
import { getAllReviews, reviewStore } from '../../reviews/store';

const route = useRoute();
const router = useRouter();

const book = getBookById(route.params.id);

const author = getAuthorById(book.value.author_id);

reviewStore.actions.getAll();

// When working with axios and asynchronous do use await
// const handleSubmit = async (data) => {
//     await updateBook(route.params.id, data);
//     router.push({ name: 'books.overview' });
// };

// <h2>Boek bewerken</h2>
//       <Form v-if="book" :book="book" @submit="handleSubmit" />

//    <tr v-for="review in getAllReviews" :key="review.id">
//      <td>{{ review.text }}</td>
    //</tr>
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
       <b>[Auteur]</b>
       <br />
       {{ author.name }}
    </div>
    <br />
    <div>
       <b>[Samenvatting]</b>
       <br />
       {{ book.summary }}
    </div>

    {{ getAllReviews }}

</template>
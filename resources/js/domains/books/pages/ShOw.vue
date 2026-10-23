<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBookById } from '../store';
import { getAuthorById } from '../../authors/store';
import { getAllReviews, reviewStore } from '../../reviews/store';

const route = useRoute();
const router = useRouter();

const book = getBookById(route.params.id);

const author = getAuthorById(book.value.author_id);

reviewStore.actions.getAll();

const reviews = getAllReviews;

// const bookReviews = computed((book_id) => );

// const filtering = (array, book_id) => {
//    const new_array = [];

//    for (const entry of array) {
//       if (entry.book_id === book_id) {
//          new_array.push(entry);
//       }
//    }

//    return new_array;
// }

// const bookReviews = filtering(reviews, book.value.id);

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
    <br />
      <tr v-for="review in reviews" :key="review.id">
         <td>{{ review.id }}</td>
         <td>{{ review.book_id }}</td>
         <td>{{ review.text }}</td>
      </tr>
</template>
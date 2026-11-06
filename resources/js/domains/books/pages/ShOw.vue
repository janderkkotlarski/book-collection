<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { bookStore} from '../store';
import { authorStore } from '../../authors/store';
import { Review, reviewStore } from '../../reviews/store';

import { useRouter } from 'vue-router';

const router = useRouter();

import Form from '../../reviews/components/Form.vue';

const route = useRoute();

const bookId = Number(route.params.id);

const review = ref({
    book_id: bookId,
    text: ''
});

const handleSubmit = async (data: Review) => {
    await reviewStore.actions.create(data);
    router.push({name: 'books.show'});
};

// Import data for the bookstore
bookStore.actions.getAll();

const book = bookStore.getters.byId(bookId);

authorStore.actions.getAll();

reviewStore.actions.getAll();

const reviews = reviewStore.getters.all;

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter((review) => review.book_id === bookId);
});

const deleteReview = async (id: number) => {
    await reviewStore.actions.delete(id);
};
</script>

<template>
   <div>
      <b>[Titel]</b>
      <br />
      {{ book.title }}
   </div>
      <br />
   <div>
      <b>[Auteur]</b>
      <br />
      <!-- Deploy this here in order to adhere to asynchronous data import -->
      <!-- book.author_id is not loaded when book is declared due to data promises -->
      {{ authorStore.getters.byId(book.author_id).value.name }}
   </div>
   <br />
   <div>
      <b>[Samenvatting]</b>
      <br />
      {{ book.summary }}
   </div>
   <br />
   <table>
      <tr>
         <th></th>
         <th>Beoordelingen</th>
         <th></th>
      </tr>
      <tr v-for="review in bookReviews" :key="review.id">
         <td>-</td>
         <td>{{ review.text }}</td>
         <td><RouterLink :to="{ name: 'reviews.edit', params: { id: review.id } }">Bewerk</RouterLink></td>
         <td><button @click="deleteReview(review.id)">Verwijder</button></td>
      </tr> 
   </table>
   <br />
   <div>
        <h2>Nieuw beoordeling toevoegen</h2>
        <Form :review="review" @submit="handleSubmit" />
   </div>
</template>
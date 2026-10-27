<script setup lang="ts">
import { ref, computed } from 'vue';
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

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter(review => review.book_id === 4);
});

const takeApart = (whole) => {
   let count = 0;

   for (const part of whole) {
      ++count;
      console.log(count);
   }
}

// reviews.map(element => {
   
// });
</script>

<template>
   {{ bookReviews }}
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
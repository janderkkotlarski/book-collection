<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getBookById } from '../store';
import { getAuthorById } from '../../authors/store';
import { getAllReviews, reviewStore } from '../../reviews/store';

const route = useRoute();

const bookId = Number(route.params.id);

const book = getBookById(bookId); 

const author = getAuthorById(book.value.author_id);

reviewStore.actions.getAll();

const reviews = getAllReviews;

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter(review => review.book_id === book.value.id);
});
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
      {{ author.name }}
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
      </tr>
      <tr v-for="review in bookReviews" :key="review.id">
         <td>-</td>
         <td>{{ review.text }}</td>         
      </tr> 
   </table>
</template>
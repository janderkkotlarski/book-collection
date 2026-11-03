<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { bookStore} from '../store';
import { authorStore } from '../../authors/store';
import { reviewStore } from '../../reviews/store';

const route = useRoute();

const bookId = Number(route.params.id);

// Import data for the bookstore
bookStore.actions.getAll();

const book = bookStore.getters.byId(bookId);

authorStore.actions.getAll();

// const authorId = book.value.author_id;

// const author = authorStore.getters.byId(authorId);

// const author = computed(() => {
//    return Object.values(authors.value).find(authoor => authoor.id === book.value.author_id);
// });

reviewStore.actions.getAll();

const reviews = reviewStore.getters.all;



// const bookReviews = reviews.value.filter(review => review.book_id === bookId))





const bookReviews = computed(() => {
   return Object.values(reviews.value).filter(review => review.book_id === bookId);
});


// {{ author.name }}

</script>

<template>
   {{ authorId }}

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
      </tr>
      <tr v-for="review in bookReviews" :key="review.id">
         <td>-</td>
         <td>{{ review.text }}</td>         
      </tr> 
   </table>
</template>
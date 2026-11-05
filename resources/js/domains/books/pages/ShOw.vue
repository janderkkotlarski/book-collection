<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { bookStore} from '../store';
import { authorStore } from '../../authors/store';
import { Review, reviewStore } from '../../reviews/store';

const route = useRoute();

const bookId = Number(route.params.id);

// Import data for the bookstore
bookStore.actions.getAll();

const book = bookStore.getters.byId(bookId);

authorStore.actions.getAll();

reviewStore.actions.getAll();

const reviews = reviewStore.getters.all;

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter((review) => review.book_id === bookId);
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
      <!-- Deploy this here in order to adhere to asynchronous data import -->
      <!-- If read earlier, no data will be read and the whole application will have critical errors -->
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
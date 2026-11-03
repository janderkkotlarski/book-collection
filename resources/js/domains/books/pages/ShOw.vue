<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getBookById, getAllBooks } from '../store';
import { getAuthorById, getAllAuthors } from '../../authors/store';
import { getAllReviews, reviewStore } from '../../reviews/store';

const route = useRoute();

const books = getAllBooks;

const bookId = Number(route.params.id);

const book = computed(() => {
   return Object.values(books.value).find(boook => boook.id === bookId);
});

const authors = getAllAuthors;

const author = computed(() => {
   return Object.values(authors.value).find(authoor => authoor.id === book.value.author_id);
});

const reviews = getAllReviews;

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter(revieew => revieew.book_id === bookId);
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
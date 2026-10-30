<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getBookById, getAllBooks } from '../store';
import { getAuthorById, getAllAuthors } from '../../authors/store';
import { getAllReviews, reviewStore } from '../../reviews/store';

const route = useRoute();

// const routeId = route.params.id;

const books = getAllBooks;

const bookId = Number(route.params.id);

// const book = getBookById(bookId);

// const book = books.value.filter((book) => book.id === bookId.value);

const book = computed(() => {
   return Object.values(books.value).find(boook => boook.id === bookId);
});

const authors = getAllAuthors;

const author = computed(() => {
   return Object.values(authors.value).find(authoor => authoor.id === book.value.author_id);
});

// const author = getAuthorById(book.value.author_id);

// reviewStore.actions.getAll();

const reviews = getAllReviews;

const bookReviews = computed(() => {
   return Object.values(reviews.value).filter(revieew => revieew.book_id === bookId);
});

/*

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
   */
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

   <br />
   <br />


   {{ books }}

   <br />
   <br />

   {{ book }}

   <br />
   <br />

   {{ bookId }}

   <br />
   <br />

   {{ reviews }}

   <br />
   <br />

   {{ bookReviews }}



</template>
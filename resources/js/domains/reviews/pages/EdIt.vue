<script setup lang="ts">
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { Review, reviewStore } from '../store';

const route = useRoute();
const router = useRouter();

reviewStore.actions.getAll();

const reviewId = Number(route.params.id);

const review = reviewStore.getters.byId(reviewId);

// When working with axios and asynchronous do use await
const handleSubmit = async (data: Review) => {
    await reviewStore.actions.update(reviewId, data);
    router.push({ name: 'books.show',  params: { id: review.value.book_id }});
};
</script>

<template>
    <div>
        <h2>Beoordeling bewerken</h2>
        <Form v-if="review" :review="review" @submit="handleSubmit" />
    </div>
</template>
<script setup lang="ts">
// import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { Author, authorStore } from '../store';

const route = useRoute();
const router = useRouter();

const authorId = Number(route.params.id);

authorStore.actions.getAll();

const author = authorStore.getters.getById(authorId);

const handleSubmit = async (data: Author) => {
    await authorStore.actions.update(authorId, data);
    router.push({ name: 'authors.overview' });
};
</script>

<template>
    <div>
        <h2>Auteur bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>
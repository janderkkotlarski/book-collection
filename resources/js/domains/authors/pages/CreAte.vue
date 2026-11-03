<script setup lang="ts">
import { ref } from 'vue';
import Form from '../components/Form.vue';
import { Author, authorStore } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const author = ref({
    name: ''
});

const handleSubmit = async (data: Author) => {
    await authorStore.actions.create(data);
    router.push({name: 'authors.overview'});
};
</script>

<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>
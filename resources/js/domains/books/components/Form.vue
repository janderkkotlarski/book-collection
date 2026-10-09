<script setup>
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

// Fetch authors when component is mounted
fetchAuthors;

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">

        <label>Titel:</label>
        <input v-model="form.title" type="text" />        
    
        <label>Samenvatting:</label>
        <input v-model="form.summary" type="text" />

        <label>Auteur:</label>
        <select v-model="form.author_id">
            <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                {{ author.name }}               
            </option>            
        </select>

        <button type="submit">Opslaan</button>

        <FormError name="title" />
        <FormError name="summary" />
        <FormError name="author_id" />
    </form>
</template>
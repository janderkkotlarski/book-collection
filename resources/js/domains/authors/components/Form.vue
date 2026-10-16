<script setup>
import { ref } from 'vue';
import { authorStore } from '../../authors/store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

// For error handling
authorStore.actions.getAll();

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Naam:</label>
        <input v-model="form.name" type="text" />

        <button type="submit">Opslaan</button>

        <FormError name="name" />
    </form>
</template>
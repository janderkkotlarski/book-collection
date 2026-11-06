<script setup lang="ts">
import { ref } from 'vue';
import { reviewStore } from '../../reviews/store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

// Somewhere along the code, refreshing error handling necessitates loading a store
reviewStore.actions.getAll();

const props = defineProps({ review: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.review });

let count = 0;

const handleSubmit = () => {
    emit('submit', form.value);
    form.value.text = "";
};
</script>

<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Tekst:</label>
        <input ref="thisForm" v-model="form.text" type="text" />

        <button type="submit">Opslaan</button>

        <FormError name="text" />
    </form>
</template>
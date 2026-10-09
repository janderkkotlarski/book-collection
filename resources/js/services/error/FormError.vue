<script setup lang="ts">
import { getErrorBag, getErrorByProperty } from '.';

defineProps<{ name: string }>();
</script>

<template>
    <div v-for="error in getErrorByProperty(name).value" :key="error">
        {{ error }}
    </div>
</template>
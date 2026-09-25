<script setup lang="ts">
import { onMounted } from 'vue';
import { getAllAuthors, fetchAuthors } from '../store';

fetchAuthors();

</script>



<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <!-- Because of Json resource management, these three warnings exist, though the code works well-->
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
        </tr>
    </table>    
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllAuthors, fetchAuthors } from '../store';

fetchAuthors();

</script>



<template>
    <table>
        <tr>
            <th>Name</th>
            <th>Summary</th>
        </tr>
        <!-- Because of Json resource management, these three warnings exist, though the code works well-->
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>{{ author.summary }}</td>
        </tr>
    </table>    
</template>
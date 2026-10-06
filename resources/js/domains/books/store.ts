import { ref, computed } from 'vue';

import { storeModuleFactory } from '../../services/store';

import { getRequest, postRequest, putRequest, deleteRequest } from '../../services/http';


// state
const books = ref([]);

export const bookStore = storeModuleFactory('books');

// getters
export const getAllBooks = computed(() => books.value);

export const getAllBooks_ = bookStore.getters.all;

export const getBookById = (id) => computed(() => books.value.find(book => book.id == id));

export const fetchBooks = async () => {
    const {data} = await getRequest('/books');
    if(!data) return;
    books.value = data;
};

// getAll: async () => {
//             const { data } = await getRequest(moduleName);
//             if (!data) return;
//             setters.setAll(data);
//         }, 

export const fetchBooks_ = bookStore.actions.getAll();

export const createBook = async (newBook) => {
    const {data} = await postRequest('/books', newBook);
    if(!data) return
    books.value = data;
};

export const updateBook = async (id, updatedBook) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

// export const deleteBook = async (id) => {
//     await deleteRequest(`/books/${id}`);
//     books.value = books.value.filter(book => book.id !== id);
// };

export const deleteBook = async (id) => {
    await bookStore.actions.delete(id);
    // code...
};
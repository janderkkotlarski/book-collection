import { storeModuleFactory } from '../../services/store';

// establish bookstore
export const bookStore = storeModuleFactory('books');

// getters
export const getAllBooks = bookStore.getters.all;
export const getBookById = (id) => bookStore.getters.getById(id);

//actions
export const fetchBooks = bookStore.actions.getAll();

export const createBook = async (newBook) => {
    await bookStore.actions.create(newBook);
};

export const updateBook = async (id, updatedBook) => {
    await bookStore.actions.update(id, updatedBook); 
};

export const deleteBook = async (id) => {
    await bookStore.actions.delete(id);
};
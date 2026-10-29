import { storeModuleFactory } from '../../services/store';

// Book store based upon generalized store

export interface Book {
    id: number;
    author_id: number;
    title: string;
    summary: string;    
}

export const bookStore = storeModuleFactory<Book>('books');

// getters
export const getAllBooks = bookStore.getters.all;
export const getBookById = (id: number) => bookStore.getters.byId(id);

//actions
export const fetchBooks = bookStore.actions.getAll();

export const createBook = async (newBook: Book) => {
    await bookStore.actions.create(newBook);
};

export const updateBook = async (id: number, updatedBook: Book) => {
    await bookStore.actions.update(id, updatedBook); 
};

export const deleteBook = async (id: number) => {
    await bookStore.actions.delete(id);
};
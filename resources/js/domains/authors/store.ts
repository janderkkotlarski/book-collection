import { storeModuleFactory } from '../../services/store';

// Establish author store
export const authorStore = storeModuleFactory('authors');

// getters
export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = (id) => authorStore.getters.getById(id);

// actions
export const fetchAuthors = authorStore.actions.getAll();

export const createAuthor = async (newAuthor) => {
    await authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (id, updatedAuthor) => {
    await authorStore.actions.update(id, updatedAuthor); 
};

export const deleteAuthor = async (id) => {
    await authorStore.actions.delete(id);
};
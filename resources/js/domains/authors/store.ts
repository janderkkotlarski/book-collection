import { storeModuleFactory } from '../../services/store';

export interface Author {
    id: number;
    name: string;    
}

// Author store based upon generalized store
export const authorStore = storeModuleFactory<Author>('authors');

// getters
export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = (id: number) => authorStore.getters.byId(id);

// actions
export const fetchAuthors = authorStore.actions.getAll();

export const createAuthor = async (newAuthor: Author) => {
    await authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    await authorStore.actions.update(id, updatedAuthor); 
};

export const deleteAuthor = async (id: number) => {
    await authorStore.actions.delete(id);
};
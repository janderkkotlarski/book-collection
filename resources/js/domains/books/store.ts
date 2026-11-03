import { storeModuleFactory } from '../../services/store';

// Book store based upon generalized store

export interface Book {
    id: number;
    author_id: number;
    title: string;
    summary: string;    
}

export const bookStore = storeModuleFactory<Book>('books');
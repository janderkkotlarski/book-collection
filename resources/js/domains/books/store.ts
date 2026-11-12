import { storeModuleFactory } from '../../services/store';

// Book store based upon generalized store

// TODO: overweeg een types.ts bestand in dit domein te zetten die je import waar alle types in staan
export interface Book {
    id: number;
    author_id: number;
    title: string;
    summary: string;    
}

export const bookStore = storeModuleFactory<Book>('books');
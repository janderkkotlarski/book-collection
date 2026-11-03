import { storeModuleFactory } from '../../services/store';

// Review store based upon generalized store

export interface Review {
    id: number;
    book_id: number;
    text: string;    
}

export const reviewStore = storeModuleFactory('reviews');
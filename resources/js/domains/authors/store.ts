import { storeModuleFactory } from '../../services/store';

export interface Author {
    id: number;
    name: string;    
}

// Author store based upon generalized store
export const authorStore = storeModuleFactory<Author>('authors');
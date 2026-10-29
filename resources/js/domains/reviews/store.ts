import { storeModuleFactory } from '../../services/store';

// Review store based upon generalized store

export interface Review {
    id: number;
    book_id: number;
    text: string;    
}

export const reviewStore = storeModuleFactory('reviews');

// getters
export const getAllReviews = reviewStore.getters.all;
export const getReviewById = (id: number) => reviewStore.getters.byId(id);

//actions
export const fetchReviews = reviewStore.actions.getAll();

export const createReview = async (newReview: Review) => {
    await reviewStore.actions.create(newReview);
};

export const updateReview = async (id: number, updatedReview: Review) => {
    await reviewStore.actions.update(id, updatedReview); 
};

export const deleteReview = async (id: number) => {
    await reviewStore.actions.delete(id);
};
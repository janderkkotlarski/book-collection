import { storeModuleFactory } from '../../services/store';

// Book store based upon generalized store

export const reviewStore = storeModuleFactory('reviews');

// getters
export const getAllReviews = reviewStore.getters.all;
export const getReviewById = (id) => reviewStore.getters.getById(id);

//actions
export const fetchReviews = reviewStore.actions.getAll();

export const createReview = async (newReview) => {
    await reviewStore.actions.create(newReview);
};

export const updateReview = async (id, updatedReview) => {
    await reviewStore.actions.update(id, updatedReview); 
};

export const deleteReview = async (id) => {
    await reviewStore.actions.delete(id);
};
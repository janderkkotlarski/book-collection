import ReviewEdit from './pages/EdIt.vue';

export const reviewRoutes =  [
    /// More clear name so there is no accidental switch to the author create page
    { path: '/review/:id/edit', component: ReviewEdit, name: 'reviews.edit' },
];
import ReviewEdit from './pages/EdIt.vue';

export const bookRoutes =  [
    /// More clear name so there is no accidental switch to the author create page
    { path: '/review/:id/edit', component: ReviewEdit, name: 'review.edit' },
];
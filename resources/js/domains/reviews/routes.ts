import ReviewCreate from './pages/CreAte.vue';
import ReviewEdit from './pages/EdIt.vue';
import ReviewShow from './pages/ShOw.vue';

export const bookRoutes =  [
    /// More clear name so there is no accidental switch to the author create page
    { path: '/createreview', component: ReviewCreate, name: 'review.create' },
    { path: '/review/:id/edit', component: ReviewEdit, name: 'review.edit' },
    { path: '/review/:id/show', component: ReviewShow, name: 'review.show' },
];
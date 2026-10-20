import AuthorsOverview from './pages/OverView.vue';
import AuthorsCreate from './pages/CreAte.vue';
import AuthorsEdit from './pages/EdIt.vue';

export const authorRoutes =  [
    { path: '/authors', component: AuthorsOverview, name: 'authors.overview' },
    // More clear name so there is no accidental switch to the author create page
    { path: '/createauthor', component: AuthorsCreate, name: 'authors.create' },
    { path: '/authors/:id/edit', component: AuthorsEdit, name: 'authors.edit' },
];
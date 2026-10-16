import AuthorsOverview from './pages/OverView.vue';
import AuthorsCreate from './pages/CreAte.vue';
import AuthorsEdit from './pages/EdIt.vue';

export const authorRoutes =  [
    { path: '/authors', component: AuthorsOverview, name: 'authors.overview' },
    { path: '/createauthor', component: AuthorsCreate, name: 'authors.create' },
    { path: '/authors/:id/edit', component: AuthorsEdit, name: 'authors.edit' },
];
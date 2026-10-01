import AuthorsOverview from './pages/OverView.vue';
import AuthorsCreate from './pages/CreAte.vue';

export const authorRoutes =  [
    { path: '/authors', component: AuthorsOverview, name: 'authors.overview' },
    { path: '/create', component: AuthorsCreate, name: 'authors.create' },
];
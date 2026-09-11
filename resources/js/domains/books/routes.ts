import Overview from './pages/OverView.vue';
import Create from './pages/CreAte.vue';

export const bookRoutes =  [
    { path: '/books', component: Overview, name: 'books.overview' },
    { path: '/books/create', component: Create, name: 'books.create' }
];
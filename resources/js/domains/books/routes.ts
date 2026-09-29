import BooksOverview from './pages/OverView.vue';
import BooksCreate from './pages/CreAte.vue';

export const bookRoutes =  [
    { path: '/books', component: BooksOverview, name: 'books.overview' },
    { path: '/books/create', component: BooksCreate, name: 'books.create' }
];
import BooksOverview from './pages/OverView.vue';
import BooksCreate from './pages/CreAte.vue';
import BooksEdit from './pages/EdIt.vue'

export const bookRoutes =  [
    { path: '/books', component: BooksOverview, name: 'books.overview' },
    { path: '/create', component: BooksCreate, name: 'books.create' },
    { path: '/books/:id/edit', component: BooksEdit, name: 'books.edit' },
];
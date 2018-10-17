import Misc from '@components/Misc.vue';
import Review from '@components/Review.vue';
import Card from '@components/Card.vue';

export const routes = [
    { path: '/misc', component: Misc, name: 'Misc' },
    { path: '/review', component: Review, name: 'Review' },
    { path: '/cards', component: Card, name: 'Card' },
]
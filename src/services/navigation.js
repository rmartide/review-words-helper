import Misc from '@components/Misc.vue';

export const routes = [
    { path: '/misc', component: Misc },
    { path: '/test', component: Misc }
]

export const paths = routes.map(route => {
    return {
        route: route.path,
        name: capitalizeRoute(route.path)
    }
});

function capitalizeRoute(route) {
    const name = route.split('/')[1];
    return name.replace(/^\w/, c => c.toUpperCase());
}
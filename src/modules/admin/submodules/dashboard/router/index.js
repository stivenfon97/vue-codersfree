const routes = [
    {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/modules/admin/submodules/dashboard/views/Dashboard.vue')
    }
];

export default routes;
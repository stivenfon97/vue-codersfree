import dashboardRoutes from '@/modules/admin/dashboard/router';

const routes = [
    {
        path: '',
        redirect: { name: 'admin.dashboard' }
    },
    ...dashboardRoutes,
];


export default routes;
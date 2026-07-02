import aboutRoutes from '../about/routes';
import blogRoutes from '../blog/routes';
import contactRoutes from '../contact/routes';
import homeRoutes from '../home/routes';

const routes = [
   ...homeRoutes,
   ...aboutRoutes,
   ...blogRoutes,
   ...contactRoutes
];


export default routes;
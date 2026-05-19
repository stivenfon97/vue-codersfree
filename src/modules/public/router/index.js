import aboutRoutes from '../submodules/about/routes';
import blogRoutes from '../submodules/blog/routes';
import contactRoutes from '../submodules/contact/routes';
import homeRoutes from '../submodules/home/routes';

const routes = [
   ...homeRoutes,
   ...aboutRoutes,
   ...blogRoutes,
   ...contactRoutes
];


export default routes;
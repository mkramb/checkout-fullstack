import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { feedbackRouter } from './feedback';

const versionRouter = new Router();
const versionPrefix = '/api/v1';

const v1Router = (router: Router) => versionRouter.use(versionPrefix, router.routes(), router.allowedMethods());

export default combineRouters(v1Router(feedbackRouter));

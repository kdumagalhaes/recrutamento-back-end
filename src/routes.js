import { Router } from 'express';

import HelloWorld from './app/controllers/HelloWorldController';

const routes = new Router();

routes.post('/', HelloWorld.store);

export default routes;

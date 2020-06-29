import { Router } from 'express';

import usersRouter from './users.routes';
import contactsRouter from './contacts.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/contacts', contactsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

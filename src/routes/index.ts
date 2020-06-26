import { Router } from 'express';

import usersRouter from './users.routes';
import contactsRouter from './contacts.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/contacts', contactsRouter);

export default routes;

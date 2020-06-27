import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', (req, res) => {
  const { name, email, password } = req.body;

  const user = usersRepository.create({ name, email, password });

  return res.json(user);
});

export default usersRouter;

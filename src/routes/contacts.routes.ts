import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';

const contactsRouter = Router();

contactsRouter.post('/', async (req, res) => {
  const { name, email, phone, user_id } = req.body;

  const createContact = new CreateContactService();

  const contact = await createContact.execute({ name, email, phone, user_id });

  return res.json(contact);
});

export default contactsRouter;

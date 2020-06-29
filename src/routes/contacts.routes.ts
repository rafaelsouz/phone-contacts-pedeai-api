import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';
import UpdateContactService from '../services/UpdateContactService';
import ListContactsService from '../services/ListContactsService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

contactsRouter.get('/', async (req, res) => {
  const listContacts = new ListContactsService();

  const contacts = await listContacts.execute();

  return res.json(contacts);
});

contactsRouter.post('/', async (req, res) => {
  const { name, email, phone, user_id } = req.body;

  const createContact = new CreateContactService();

  const contact = await createContact.execute({ name, email, phone, user_id });

  return res.json(contact);
});

contactsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const updateContact = new UpdateContactService();

  const contact = await updateContact.execute({ name, email, phone, id });

  return res.json(contact);
});

export default contactsRouter;

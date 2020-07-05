import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';
import UpdateContactService from '../services/UpdateContactService';
import ListContactsService from '../services/ListContactsService';
import FindContactService from '../services/FindContactService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

// Listagem de contatos
contactsRouter.get('/', async (req, res) => {
  const listContacts = new ListContactsService();

  const userId = req.user.id;

  const contacts = await listContacts.execute(userId);

  return res.json(contacts);
});

// Encontra um contato
contactsRouter.get('/:id', async (req, res) => {
  const findContacts = new FindContactService();

  const user_id = req.user.id;
  const { id } = req.params;

  const contacts = await findContacts.execute({ user_id, id });

  return res.json(contacts);
});

// Criação um contato
contactsRouter.post('/', async (req, res) => {
  const { name, email, phone, user_id } = req.body;

  const createContact = new CreateContactService();

  const contact = await createContact.execute({ name, email, phone, user_id });

  return res.json(contact);
});

// Edição um contato
contactsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const updateContact = new UpdateContactService();

  const contact = await updateContact.execute({ name, email, phone, id });

  return res.json(contact);
});

export default contactsRouter;

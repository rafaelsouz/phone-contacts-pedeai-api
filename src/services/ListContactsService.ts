import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

class ListContactsService {
  public async execute(): Promise<Contact[]> {
    const contactsRepository = getRepository(Contact);

    const contacts = await contactsRepository.find();

    return contacts;
  }
}

export default ListContactsService;

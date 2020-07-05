import { getRepository } from 'typeorm';

import Contact from '../models/Contact';

class ListContactsService {
  public async execute(user_id: string): Promise<Contact[]> {
    const contactsRepository = getRepository(Contact);

    const contacts = await contactsRepository.find({
      where: { user_id },
    });

    return contacts;
  }
}

export default ListContactsService;

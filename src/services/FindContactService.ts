import { getRepository } from 'typeorm';

import Contact from '../models/Contact';
import AppError from '../errors/AppError';

interface IRequest {
  user_id: string;
  id: string;
}

class FindContactService {
  public async execute({ user_id, id }: IRequest): Promise<Contact> {
    const contactsRepository = getRepository(Contact);

    const contact = await contactsRepository.findOne({
      where: { id, user_id },
    });

    if (!contact) {
      throw new AppError('Contact not found');
    }

    return contact;
  }
}

export default FindContactService;

import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Contact from '../models/Contact';

interface IRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
}

class UpdateUserService {
  public async execute({ name, email, phone, id }: IRequest): Promise<Contact> {
    const contactsRepository = getRepository(Contact);

    const contact = await contactsRepository.findOne({
      where: { id },
    });

    if (!contact) {
      throw new AppError('This contact does not exist');
    }

    await contactsRepository.update(contact.id, {
      name,
      email,
      phone,
    });

    const updatedContact = await contactsRepository.findOneOrFail({
      where: { id },
    });

    return updatedContact;
  }
}

export default UpdateUserService;

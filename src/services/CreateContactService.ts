import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Contact from '../models/Contact';
import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  user_id: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    phone,
    user_id,
  }: IRequest): Promise<Contact> {
    const contactsRepository = getRepository(Contact);
    const usersRepository = getRepository(User);

    const checkUserExist = await usersRepository.findOne({
      where: { id: user_id },
    });

    if (!checkUserExist) {
      throw new AppError('This user does not exist');
    }

    const contact = contactsRepository.create({
      name,
      email,
      phone,
      user_id,
    });

    await contactsRepository.save(contact);

    return contact;
  }
}

export default CreateUserService;

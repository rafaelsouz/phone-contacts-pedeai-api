import User from '../models/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email, password }: ICreateUserDTO): User {
    const user = new User(name, email, password);

    this.users.push(user);

    return user;
  }
}

export default UserRepository;

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export type User = any;

export class UserService {

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'john@test.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@test.com',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}

function InjectModel(name: any) {
  throw new Error('Function not implemented.');
}

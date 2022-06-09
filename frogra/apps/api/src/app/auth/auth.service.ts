import { Injectable } from '@nestjs/common';
import { PrismaClient} from '@prisma/client'
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient()

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService  
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {

    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
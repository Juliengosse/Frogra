import { Injectable, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
      return req.user;
    }
    
}
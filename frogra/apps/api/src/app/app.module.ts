import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaneModule } from './plane/plane.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PlaneModule, UserModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

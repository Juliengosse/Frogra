import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaneModule } from './plane/plane.module';

@Module({
  imports: [PlaneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

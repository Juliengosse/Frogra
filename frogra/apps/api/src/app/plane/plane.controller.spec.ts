import { Test } from '@nestjs/testing';
import { PlaneController } from './plane.controller';
import { PlaneService } from './plane.service';

describe('PlaneController', () => {
  let controller: PlaneController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PlaneService],
      controllers: [PlaneController],
    }).compile();

    controller = module.get(PlaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

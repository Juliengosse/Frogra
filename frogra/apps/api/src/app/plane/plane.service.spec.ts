import { Test } from '@nestjs/testing';
import { PlaneService } from './plane.service';

describe('PlaneService', () => {
  let service: PlaneService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PlaneService],
    }).compile();

    service = module.get(PlaneService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

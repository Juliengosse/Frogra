import { Test } from '@nestjs/testing';
import { SkillService } from './skill.service';

describe('SkillService', () => {
  let service: SkillService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SkillService],
    }).compile();

    service = module.get(SkillService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

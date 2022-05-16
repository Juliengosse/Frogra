import { Test } from '@nestjs/testing';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';

describe('UserController', () => {
  let controller: SkillController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SkillService],
      controllers: [SkillController],
    }).compile();

    controller = module.get(SkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

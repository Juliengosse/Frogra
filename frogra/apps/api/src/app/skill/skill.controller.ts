import { Controller, Get } from '@nestjs/common'
import { SkillService } from './skill.service'

@Controller('skills')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get()
  public getSkill() {
    return this.skillService.getSkill()
  }
}
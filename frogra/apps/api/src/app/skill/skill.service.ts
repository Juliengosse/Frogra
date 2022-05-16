import { Injectable } from '@nestjs/common';
import { PrismaClient, Skill } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class SkillService {
  public getSkill(): Promise<Skill[]> {
    return prisma.skill.findMany()
  }
}
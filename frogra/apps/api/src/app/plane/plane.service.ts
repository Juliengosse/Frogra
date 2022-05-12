import { Injectable } from '@nestjs/common';
import { PrismaClient, Plane } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class PlaneService {
  public getPlanes(): Promise<Plane[]> {
    return prisma.plane.findMany()
  }
}
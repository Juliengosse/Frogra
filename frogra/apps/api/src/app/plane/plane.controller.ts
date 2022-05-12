import { Controller, Get } from '@nestjs/common'
import { PlaneService } from './plane.service'

@Controller('planes')
export class PlaneController {
  constructor(private planeService: PlaneService) {}

  @Get()
  public getPlanes() {
    return this.planeService.getPlanes()
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { Avion } from '../avion';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AvionService } from '../avion.service';

@Component({
  selector: 'app-avion-detail',
  templateUrl: './avion-detail.component.html',
  styleUrls: ['./avion-detail.component.css']
})
export class AvionDetailComponent implements OnInit {
  @Input() avion?: Avion;

  constructor(
    private route: ActivatedRoute,
    private avionService: AvionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAvion();
  }
  
  getAvion(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.avionService.getAvion(id)
      .subscribe(avion => this.avion = avion);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.avion) {
      this.avionService.updateAvion(this.avion)
        .subscribe(() => this.goBack());
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { AvionService } from '../avion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  avions: Avion[] = [];

  constructor(private avionService: AvionService) { }

  ngOnInit(): void {
    this.getAvions();
  }

  getAvions(): void {
    this.avionService.getAvions()
      .subscribe(avions => this.avions = avions.slice(1, 5));
  }
}
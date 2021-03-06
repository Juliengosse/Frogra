import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { Location } from '@angular/common';
import { AvionService } from '../avion.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {
  avions: Avion[] = [];
  
  constructor(
    private avionService: AvionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAvions();
  }
  goBack(): void {
    this.location.back();
  }

  getAvions(): void {
    this.avionService.getAvions()
    .subscribe(avions => this.avions = avions);
  }
}
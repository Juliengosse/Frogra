import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AvionService } from '../avion.service';

@Component({
  selector: 'frogra-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
})
export class CreditsComponent implements OnInit {
  constructor(
    private avionService: AvionService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }
}

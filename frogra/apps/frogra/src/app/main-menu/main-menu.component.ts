import { Component, OnInit } from '@angular/core';
import { Avion } from '../avion';
import { AvionService } from '../avion.service';

@Component({
  selector: 'frogra-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  avions: Avion[] = [];
  
  constructor(private avionService: AvionService) { }
  
  ngOnInit(): void {
    this.getAvions();
  }
  
  getAvions(): void {
    this.avionService.getAvions()
      .subscribe(avion => this.avions = avion.slice(1, 5));
  }
}

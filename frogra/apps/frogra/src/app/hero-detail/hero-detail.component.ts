import { Component, OnInit, Input } from '@angular/core';
import { Avion } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() avion?: Avion;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(avion => this.avion = avion);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.avion) {
      this.heroService.updateHero(this.avion)
        .subscribe(() => this.goBack());
    }
  }

}
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Avion } from './avion';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const avions :Avion[] = [
      { id: 1, hp: 150, atk: 10, df: 8, name: 'Concorde'},
      { id: 2, hp: 50, atk: 10, df: 3, name: 'Cessna 152' },
      { id: 3, hp: 75, atk: 10, df: 6, name: 'Piper PA28' },
      { id: 4, hp: 70, atk: 10, df: 4, name: 'Robin DR400' },
      { id: 5, hp: 500, atk: 10, df: 15, name: 'Rafale' },
      { id: 6, hp: 180, atk: 10, df: 8, name: 'Boeing 737' },
      { id: 7, hp: 250, atk: 10, df: 10, name: 'Airbus A380' },
      { id: 8, hp: 120, atk: 10, df: 8, name: 'Mitsubichi CRJ700' },
      { id: 9, hp: 200, atk: 10, df: 8, name: 'Airbus Beluga' },
      { id: 10, hp: 100, atk: 10, df: 7, name: 'Bombardier Q400' },
      { id: 11, hp: 100, atk: 10, df: 5, name: 'Canadair CL-415' }
    ];
    return {avions};
  }

  // Overrides the genId method to ensure that a avion always has an id.
  // If the avions array is empty,
  // the method below returns the initial number (11).
  // if the avions array is not empty, the method below returns the highest
  // avion id + 1.
  genId(avions: Avion[]): number {
    return avions.length > 0 ? Math.max(...avions.map(avion => avion.id)) + 1 : 11;
  }
}
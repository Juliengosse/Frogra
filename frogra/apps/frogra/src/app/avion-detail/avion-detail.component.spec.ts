import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionDetailComponent } from './avion-detail.component';

describe('AvionDetailComponent', () => {
  let component: AvionDetailComponent;
  let fixture: ComponentFixture<AvionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

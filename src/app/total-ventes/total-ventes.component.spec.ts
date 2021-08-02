import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVentesComponent } from './total-ventes.component';

describe('TotalVentesComponent', () => {
  let component: TotalVentesComponent;
  let fixture: ComponentFixture<TotalVentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

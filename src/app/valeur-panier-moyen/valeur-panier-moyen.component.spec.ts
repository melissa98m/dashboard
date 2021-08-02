import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValeurPanierMoyenComponent } from './valeur-panier-moyen.component';

describe('ValeurPanierMoyenComponent', () => {
  let component: ValeurPanierMoyenComponent;
  let fixture: ComponentFixture<ValeurPanierMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValeurPanierMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValeurPanierMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

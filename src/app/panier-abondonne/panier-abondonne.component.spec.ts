import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierAbondonneComponent } from './panier-abondonne.component';

describe('PanierAbondonneComponent', () => {
  let component: PanierAbondonneComponent;
  let fixture: ComponentFixture<PanierAbondonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierAbondonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierAbondonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

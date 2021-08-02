import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsVendusComponent } from './produits-vendus.component';

describe('ProduitsVendusComponent', () => {
  let component: ProduitsVendusComponent;
  let fixture: ComponentFixture<ProduitsVendusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsVendusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsVendusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

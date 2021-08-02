import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCommandesComponent } from './conversion-commandes.component';

describe('ConversionCommandesComponent', () => {
  let component: ConversionCommandesComponent;
  let fixture: ComponentFixture<ConversionCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

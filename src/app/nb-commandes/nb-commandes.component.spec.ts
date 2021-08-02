import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbCommandesComponent } from './nb-commandes.component';

describe('NbCommandesComponent', () => {
  let component: NbCommandesComponent;
  let fixture: ComponentFixture<NbCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

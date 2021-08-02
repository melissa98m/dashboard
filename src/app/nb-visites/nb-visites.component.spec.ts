import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbVisitesComponent } from './nb-visites.component';

describe('NbVisitesComponent', () => {
  let component: NbVisitesComponent;
  let fixture: ComponentFixture<NbVisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbVisitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurenseCommandesComponent } from './recurense-commandes.component';

describe('RecurenseCommandesComponent', () => {
  let component: RecurenseCommandesComponent;
  let fixture: ComponentFixture<RecurenseCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurenseCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurenseCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

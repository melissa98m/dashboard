import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbPaniersComponent } from './nb-paniers.component';

describe('NbPaniersComponent', () => {
  let component: NbPaniersComponent;
  let fixture: ComponentFixture<NbPaniersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbPaniersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbPaniersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPaniersComponent } from './conversion-paniers.component';

describe('ConversionPaniersComponent', () => {
  let component: ConversionPaniersComponent;
  let fixture: ComponentFixture<ConversionPaniersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionPaniersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPaniersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

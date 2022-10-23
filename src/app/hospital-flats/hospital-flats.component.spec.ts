import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFlatsComponent } from './hospital-flats.component';

describe('HospitalFlatsComponent', () => {
  let component: HospitalFlatsComponent;
  let fixture: ComponentFixture<HospitalFlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalFlatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

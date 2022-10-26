import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDisplayComponent } from './doctor-appointment-display.component';

describe('DoctorAppointmentDisplayComponent', () => {
  let component: DoctorAppointmentDisplayComponent;
  let fixture: ComponentFixture<DoctorAppointmentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAppointmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

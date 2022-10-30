import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFloorComponent } from './hospital-floor.component';

describe('HospitalFlatsComponent', () => {
  let component: HospitalFloorComponent;
  let fixture: ComponentFixture<HospitalFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalFloorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

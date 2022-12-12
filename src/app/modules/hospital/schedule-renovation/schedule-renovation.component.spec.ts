import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRenovationComponent } from './schedule-renovation.component';

describe('ScheduleRenovationComponent', () => {
  let component: ScheduleRenovationComponent;
  let fixture: ComponentFixture<ScheduleRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleRenovationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

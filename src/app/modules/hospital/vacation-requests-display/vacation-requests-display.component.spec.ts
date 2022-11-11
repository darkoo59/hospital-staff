import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestsDisplayComponent } from './vacation-requests-display.component';

describe('VacationRequestsDisplayComponent', () => {
  let component: VacationRequestsDisplayComponent;
  let fixture: ComponentFixture<VacationRequestsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationRequestsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationRequestsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

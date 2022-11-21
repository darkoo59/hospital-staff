import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientTreatmentsComponent } from './inpatient-treatments.component';

describe('InpatientTreatmentsComponent', () => {
  let component: InpatientTreatmentsComponent;
  let fixture: ComponentFixture<InpatientTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpatientTreatmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpatientTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

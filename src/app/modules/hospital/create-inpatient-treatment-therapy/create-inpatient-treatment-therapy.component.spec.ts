import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInpatientTreatmentTherapyComponent } from './create-inpatient-treatment-therapy.component';

describe('CreateInpatientTreatmentTherapyComponent', () => {
  let component: CreateInpatientTreatmentTherapyComponent;
  let fixture: ComponentFixture<CreateInpatientTreatmentTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInpatientTreatmentTherapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInpatientTreatmentTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInpatientTreatmentComponent } from './create-inpatient-treatment.component';

describe('CreateInpatientTreatmentComponent', () => {
  let component: CreateInpatientTreatmentComponent;
  let fixture: ComponentFixture<CreateInpatientTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInpatientTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInpatientTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

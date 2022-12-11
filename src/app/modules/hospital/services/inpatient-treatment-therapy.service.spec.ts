import { TestBed } from '@angular/core/testing';

import { InpatientTreatmentTherapyService } from './inpatient-treatment-therapy.service';

describe('InpatientTreatmentTherapyService', () => {
  let service: InpatientTreatmentTherapyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpatientTreatmentTherapyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

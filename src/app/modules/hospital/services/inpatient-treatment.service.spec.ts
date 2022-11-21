import { TestBed } from '@angular/core/testing';

import { InpatientTreatmentService } from './inpatient-treatment.service';

describe('InpatientTreatmentService', () => {
  let service: InpatientTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpatientTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

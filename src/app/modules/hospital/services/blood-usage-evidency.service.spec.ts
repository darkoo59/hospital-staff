import { TestBed } from '@angular/core/testing';

import { BloodUsageEvidencyService } from './blood-usage-evidency.service';

describe('BloodUsageEvidencyService', () => {
  let service: BloodUsageEvidencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodUsageEvidencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BloodService } from './blood.service';

describe('BloodService', () => {
  let service: BloodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

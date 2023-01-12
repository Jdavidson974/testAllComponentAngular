import { TestBed } from '@angular/core/testing';

import { TestNestServicesService } from './test-nest-services.service';

describe('TestNestServicesService', () => {
  let service: TestNestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

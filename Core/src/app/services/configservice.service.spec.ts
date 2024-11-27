import { TestBed } from '@angular/core/testing';

import { ConfigserviceService } from './configservice.service';

describe('ConfigserviceService', () => {
  let service: ConfigserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

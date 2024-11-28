import { TestBed } from '@angular/core/testing';

import { RegistroUsersService } from './registro-users.service';

describe('RegistroUsersService', () => {
  let service: RegistroUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

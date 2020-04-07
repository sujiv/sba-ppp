import { TestBed } from '@angular/core/testing';

import { LoadApplicationService } from './load-application.service';

describe('LoadApplicationService', () => {
  let service: LoadApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

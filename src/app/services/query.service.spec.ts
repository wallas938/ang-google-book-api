import { TestBed } from '@angular/core/testing';

import { QueryService } from './query-service.service';

describe('QueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryService = TestBed.get(QueryService);
    expect(service).toBeTruthy();
  });
});

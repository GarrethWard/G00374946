import { TestBed } from '@angular/core/testing';

import { NewsUKService } from './news-uk.service';

describe('NewsUKService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsUKService = TestBed.get(NewsUKService);
    expect(service).toBeTruthy();
  });
});

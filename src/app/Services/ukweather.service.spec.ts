import { TestBed } from '@angular/core/testing';

import { UKWeatherService } from './ukweather.service';

describe('UKWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UKWeatherService = TestBed.get(UKWeatherService);
    expect(service).toBeTruthy();
  });
});

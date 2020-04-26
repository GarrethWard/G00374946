import { TestBed } from '@angular/core/testing';

import { IrishWeatherService } from './irish-weather.service';

describe('IrishWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IrishWeatherService = TestBed.get(IrishWeatherService);
    expect(service).toBeTruthy();
  });
});

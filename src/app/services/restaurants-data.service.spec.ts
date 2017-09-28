import { TestBed, inject } from '@angular/core/testing';

import { RestaurantsDataService } from './restaurants-data.service';

describe('RestaurantsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantsDataService]
    });
  });

  it('should be created', inject([RestaurantsDataService], (service: RestaurantsDataService) => {
    expect(service).toBeTruthy();
  }));
});

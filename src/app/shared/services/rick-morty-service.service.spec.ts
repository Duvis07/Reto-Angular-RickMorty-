import { TestBed } from '@angular/core/testing';

import { RickMortyServiceService } from './rick-morty.service';

describe('RickMortyServiceService', () => {
  let service: RickMortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

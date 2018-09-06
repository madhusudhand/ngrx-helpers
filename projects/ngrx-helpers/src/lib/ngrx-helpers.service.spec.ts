import { TestBed } from '@angular/core/testing';

import { NgrxHelpersService } from './ngrx-helpers.service';

describe('NgrxHelpersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxHelpersService = TestBed.get(NgrxHelpersService);
    expect(service).toBeTruthy();
  });
});

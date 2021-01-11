import { TestBed } from '@angular/core/testing';

import { AbbDumbsLibService } from './abb-dumbs-lib.service';

describe('AbbDumbsLibService', () => {
  let service: AbbDumbsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbDumbsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

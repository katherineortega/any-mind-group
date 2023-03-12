import { TestBed } from '@angular/core/testing';

import { PrPostMessageImplementService } from './pr-post-message-implement.service';

describe('PrPostMessageImplementService', () => {
  let service: PrPostMessageImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrPostMessageImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

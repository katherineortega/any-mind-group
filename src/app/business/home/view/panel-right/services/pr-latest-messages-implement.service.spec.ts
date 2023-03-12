import { TestBed } from '@angular/core/testing';

import { PrLatestMessagesImplementService } from './pr-latest-messages-implement.service';

describe('PrLatestMessagesImplementService', () => {
  let service: PrLatestMessagesImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrLatestMessagesImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

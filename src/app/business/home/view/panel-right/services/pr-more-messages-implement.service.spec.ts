import { TestBed } from '@angular/core/testing';

import { PrMoreMessagesImplementService } from './pr-more-messages-implement.service';

describe('PrMoreMessagesImplementService', () => {
  let service: PrMoreMessagesImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrMoreMessagesImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

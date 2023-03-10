import { TestBed } from '@angular/core/testing';

import { LatestMessagesGraphqlService } from './latest-messages-graphql.service';

describe('LatestMessagesGraphqlService', () => {
  let service: LatestMessagesGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestMessagesGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

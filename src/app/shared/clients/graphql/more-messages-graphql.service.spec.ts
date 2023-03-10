import { TestBed } from '@angular/core/testing';

import { MoreMessagesGraphqlService } from './more-messages-graphql.service';

describe('MoreMessagesGraphqlService', () => {
  let service: MoreMessagesGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreMessagesGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

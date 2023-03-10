import { TestBed } from '@angular/core/testing';

import { SendMessageGraphqlService } from './send-message-graphql.service';

describe('SendMessageGraphqlService', () => {
  let service: SendMessageGraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMessageGraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

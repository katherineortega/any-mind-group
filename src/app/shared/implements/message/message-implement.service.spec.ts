import { MessageImplementService } from './message-implement.service';
import { TestBed } from "@angular/core/testing";

describe('MessageImplementService', () => {
  let messageImplementService: MessageImplementService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        MessageImplementService
      ]
    });
    messageImplementService = TestBed.inject(MessageImplementService);
  });

  it('should be created', () => {
    expect(messageImplementService).toBeTruthy();
  });
});

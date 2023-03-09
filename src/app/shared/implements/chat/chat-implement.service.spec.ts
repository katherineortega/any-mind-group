import { ChatImplementService } from './chat-implement.service';
import { ChatClientService } from "@clients/chat/chat-client.service";
import { TestBed } from "@angular/core/testing";

describe('ChatImplementService', () => {
  let chatImplementService: ChatImplementService;

  beforeEach(() => {

    const MockChatClientService: Partial<ChatClientService> = {};

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ChatClientService,
          useValue: MockChatClientService
        },
        ChatImplementService
      ]
    });
    chatImplementService = TestBed.inject(ChatImplementService);
  });

  it('should be created', () => {
    expect(chatImplementService).toBeTruthy();
  });
});

import { TestBed } from "@angular/core/testing";
import { ChannelStoreImplementService } from "@implements/store/channel-store-implement.service";

describe('ChannelStoreImplementService', () => {
  let channelStoreImplementService: ChannelStoreImplementService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ChannelStoreImplementService
      ]
    });
    channelStoreImplementService = TestBed.inject(ChannelStoreImplementService);
  });

  it('should be created', () => {
    expect(channelStoreImplementService).toBeTruthy();
  });
});

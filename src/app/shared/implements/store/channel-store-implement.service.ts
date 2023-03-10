import { Injectable } from '@angular/core';
import { LocalStoreClientService } from "@clients/store/local-store-client.service";
import { Channel } from "@models/channel.model";

@Injectable()
export class ChannelStoreImplementService {
  private storedKey: string = 'CHANNEL';

  constructor(
    private localStoreClient: LocalStoreClientService,
  ) {
  }

  public getStoredChannel(): Channel {
    return this.localStoreClient.getStorageItem<Channel>(this.storedKey);
  }

  public setStoredChannel(channel: Channel) {
    return this.localStoreClient.setStorageItem<Channel>(this.storedKey, channel);
  }

  public removeStoredVChannel() {
    return this.localStoreClient.removeStorageItem(this.storedKey);
  }

}

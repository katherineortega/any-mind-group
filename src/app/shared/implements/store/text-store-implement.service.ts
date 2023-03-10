import { Injectable } from '@angular/core';
import { LocalStoreClientService } from "@clients/store/local-store-client.service";

@Injectable()
export class TextStoreImplementService {
  private storedKey: string = 'TEXT';

  constructor(
    private localStoreClient: LocalStoreClientService,
  ) {
  }

  public getStoredText(): string {
    return this.localStoreClient.getStorageItem<string>(this.storedKey);
  }

  public setStoredText(text: string) {
    return this.localStoreClient.setStorageItem<string>(this.storedKey, text);
  }

  public removeStoredText() {
    return this.localStoreClient.removeStorageItem(this.storedKey);
  }

}

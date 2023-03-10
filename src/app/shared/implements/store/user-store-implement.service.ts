import { Injectable } from '@angular/core';
import { LocalStoreClientService } from "@clients/store/local-store-client.service";
import { User } from "@models/user.model";

@Injectable()
export class UserStoreImplementService {
  private storedKey: string = 'USER';

  constructor(
    private localStoreClient: LocalStoreClientService,
  ) {
  }

  public getStoredUser(): User {
    return this.localStoreClient.getStorageItem<User>(this.storedKey);
  }

  public setStoredUser(user: User) {
    return this.localStoreClient.setStorageItem<User>(this.storedKey, user);
  }

  public removeStoredUser() {
    return this.localStoreClient.removeStorageItem(this.storedKey);
  }

}

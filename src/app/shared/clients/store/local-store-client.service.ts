import { Injectable } from "@angular/core";

@Injectable()
export class LocalStoreClientService {
  constructor() {
  }

  private get storage(): Storage {
    return localStorage;
  }

  public cleanStorage() {
    return this.storage.clear();
  }

  public getStorageItem<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key) || JSON.stringify(''));
  }

  public setStorageItem<T>(key: string, value: T) {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  public removeStorageItem(key: string) {
    return this.storage.removeItem(key);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from "rxjs";
import { Channel } from "@models/channel.model";
import { User } from "@models/user.model";

@Injectable()
export class PanelLeftImplementService {
  private selectedChannelSubject = new BehaviorSubject<Channel | null>(null);
  private selectedUserSubject = new BehaviorSubject<User | null>(null);
  private userListSubject = new BehaviorSubject<User[]>([]);

  constructor() {
  }

  get selectedChannel$(): Observable<Channel | null> {
    return this.selectedChannelSubject.asObservable()
      .pipe(filter((channel: Channel | null) => !!channel));
  }

  set selectedChannel(channel: Channel | null) {
    this.selectedChannelSubject.next(channel);
  }

  get selectedUser$(): Observable<User | null> {
    return this.selectedUserSubject.asObservable()
      .pipe(filter((user: User | null) => !!user));
  }

  set selectedUser(user: User | null) {
    this.selectedUserSubject.next(user);
  }

  get userList$(): Observable<User[]> {
    return this.userListSubject.asObservable()
      .pipe(filter((userList: User[]) => !!userList.length));
  }

  set userList(userList: User[]) {
    this.userListSubject.next(userList);
  }

}

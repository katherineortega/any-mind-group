import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { Message } from "@models/message.model";
import { User } from "@models/user.model";
import { Channel } from "@models/channel.model";

@Injectable()
export class PanelRightStoreService {
  private subscriptionList: Array<Subscription> = [];

  private messageListSubject = new BehaviorSubject<Message[]>([]);
  private userSubject = new BehaviorSubject<User | undefined | null>(undefined);
  private userListSubject = new BehaviorSubject<User[]>([]);
  private channelSubject = new BehaviorSubject<Channel | undefined | null>(undefined);
  private totalMoreMessagesSubject = new BehaviorSubject<number>(0);

  private messageListStore: Message[] = [];
  private userStore: User | undefined | null;
  private userListStore: User[] = [];
  private channelStore: Channel | undefined | null;
  private totalMoreMessagesStore: number = 0;
  private localMessageListStore: Message[] = [];

  constructor() {
    const subscriptionMessageList = this.messageList$
      .subscribe(messageList => this.messageListStore = messageList);
    const subscriptionUser = this.user$
      .subscribe(user => this.userStore = user);
    const subscriptionUserList = this.userList$
      .subscribe(userList => this.userListStore = userList);
    const subscriptionChannel = this.channel$
      .subscribe(channel => this.channelStore = channel);
    const subscriptionTotalMoreMessages = this.totalMoreMessages$
      .subscribe(totalMoreMessages => this.totalMoreMessagesStore = totalMoreMessages);

    this.subscriptionList.push(
      subscriptionMessageList,
      subscriptionUser,
      subscriptionUserList,
      subscriptionChannel,
      subscriptionTotalMoreMessages
    );
  }

  get messageList$(): Observable<Message[]> {
    return this.messageListSubject.asObservable();
  }

  get messageList(): Message[] {
    return this.messageListStore;
  }

  set messageList(messageList: Message[]) {
    this.messageListSubject.next(messageList);
  }

  get localMessageList(): Message[] {
    return this.localMessageListStore;
  }

  set localMessageList(messageList: Message[]) {
    this.localMessageListStore = messageList;
  }

  get user$(): Observable<User | null | undefined> {
    return this.userSubject.asObservable();
  }

  get user(): User | null | undefined {
    return this.userStore;
  }

  set user(user: User | null | undefined) {
    this.userSubject.next(user);
  }

  get userList$(): Observable<User[]> {
    return this.userListSubject.asObservable();
  }

  get userList(): User[] {
    return this.userListStore;
  }

  set userList(userList: User[]) {
    this.userListSubject.next(userList);
  }

  get channel$(): Observable<Channel | undefined | null> {
    return this.channelSubject.asObservable();
  }

  get channel(): Channel | undefined | null {
    return this.channelStore;
  }

  set channel(channel: Channel | undefined | null) {
    this.channelSubject.next(channel);
  }

  get totalMoreMessages$(): Observable<number> {
    return this.totalMoreMessagesSubject.asObservable();
  }

  get totalMoreMessages(): number {
    return this.totalMoreMessagesStore;
  }

  set totalMoreMessages(total: number) {
    this.totalMoreMessagesSubject.next(total);
  }

  public addLocalMessageList(messageList: Message[] = this.messageList) {
    if (this.localMessageList.length) {
      this.localMessageList.forEach((localMessage: Message) => {
        const indexOfLocalMessage = messageList
          .map(message => message.messageId)
          .indexOf(localMessage.messageId);

        if (indexOfLocalMessage === -1) {
          const indexOfPreviousMessage = messageList
            .map(message => message.messageId)
            .indexOf(localMessage.previousMessageId) || 0;

          messageList.splice(indexOfPreviousMessage, 0, localMessage);
        }
      });
    }
    this.messageList = [...messageList];
  }

  destroyPanelRightStore() {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}

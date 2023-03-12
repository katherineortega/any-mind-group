import { Component, OnDestroy, OnInit } from '@angular/core';
import { Channel } from "@models/channel.model";
import { User } from "@models/user.model";
import { Subscription } from "rxjs";
import { Message } from "@models/message.model";
import { PanelRightStoreService } from "./services/panel-right-store.service";
import { PrPostMessageImplementService } from "./services/pr-post-message-implement.service";
import { PrMoreMessagesImplementService } from "./services/pr-more-messages-implement.service";
import { PrLatestMessagesImplementService } from "./services/pr-latest-messages-implement.service";
import { PanelRightImplementService } from "./services/panel-right-implement.service";

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.sass']
})
export class PanelRightComponent implements OnInit, OnDestroy {
  private subscriptionList: Array<Subscription> = [];

  public messageList: Message[] = [];
  public channel: Channel | null | undefined;
  public user: User | null | undefined;
  public userList: User[] = [];
  public totalMoreMessages: number = 0;

  constructor(
    private panelRightStore: PanelRightStoreService,
    private panelRightImplement: PanelRightImplementService,
    private prPostMessageImplement: PrPostMessageImplementService,
    private prMoreMessagesImplement: PrMoreMessagesImplementService,
    private prLatestMessagesImplement: PrLatestMessagesImplementService,
  ) {
  }

  ngOnInit(): void {
    this.panelRightImplement.getSelectedUser();
    this.panelRightImplement.getChannelAndUserList();

    const subscriptionMessageList = this.panelRightStore.messageList$
      .subscribe((messageList: Message[]) => this.messageList = messageList);
    const subscriptionUser = this.panelRightStore.user$
      .subscribe((user: User | null | undefined) => this.user = user);
    const subscriptionUserList = this.panelRightStore.userList$
      .subscribe((userList: User[]) => this.userList = userList);
    const subscriptionChannel = this.panelRightStore.channel$
      .subscribe((channel: Channel | null | undefined) => this.channel = channel);
    const subscriptionTotalMoreMessages = this.panelRightStore.totalMoreMessages$
      .subscribe((totalMoreMessages: number) => this.totalMoreMessages = totalMoreMessages);

    this.subscriptionList.push(
      subscriptionMessageList,
      subscriptionUser,
      subscriptionUserList,
      subscriptionChannel,
      subscriptionTotalMoreMessages
    );
  }

  loadMoreMessages() {
    this.prMoreMessagesImplement.loadMoreMessages();
  }

  postMessage(message: string) {
    this.prPostMessageImplement.postMessage(message);
  }

  retryMessage(postMessage: Message) {
    this.prPostMessageImplement.retryMessage(postMessage);
  }


  ngOnDestroy(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
    this.panelRightStore.destroyPanelRightStore();
    this.panelRightImplement.destroyPanelRightImplement();
    this.prPostMessageImplement.destroyPrPostMessageImplement();
    this.prMoreMessagesImplement.destroyPrMoreMessagesImplement();
    this.prLatestMessagesImplement.destroyPrLatestMessagesImplement();
  }

}

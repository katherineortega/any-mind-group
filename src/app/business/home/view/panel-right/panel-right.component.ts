import { Component, OnDestroy, OnInit } from '@angular/core';
import { PanelLeftStoreService } from "../panel-left/panel-left-store.service";
import { Channel } from "@models/channel.model";
import { User } from "@models/user.model";
import { combineLatest, Subscription } from "rxjs";
import { MessageImplementService } from "@implements/message/message-implement.service";
import { EChannelId } from "@interfaces/channel.interface";
import { EUserId } from "@interfaces/user.interface";
import { Message } from "@models/message.model";
import { EMessageStatus } from "@interfaces/message.interface";

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.sass']
})
export class PanelRightComponent implements OnInit, OnDestroy {
  private subscriptionList: Array<Subscription> = [];
  private latestMessagesWatch: boolean = false;

  public messageList: Message[] = [];
  public loadingMessageList: Message[] = [];
  public channel: Channel | null | undefined;
  public user: User | null | undefined;
  public userList: User[] = [];

  constructor(
    private panelLeftStore: PanelLeftStoreService,
    private messageImplement: MessageImplementService,
  ) {
  }

  ngOnInit(): void {
    this.getSelectedUser();
    const selectedChannel$ = this.panelLeftStore.selectedChannel$;
    const userList$ = this.panelLeftStore.userList$;

    const subscription = combineLatest([selectedChannel$, userList$])
      .subscribe(([channel, userList]: [Channel | null, User[]]) => {
        this.channel = channel;
        this.userList = userList;
        if (!!this.channel) {
          this.latestMessagesWatch ?
            this.messageImplement.refetchLatestMessages(this.channel.id) :
            this.latestMessages(this.channel);
        }
      })
    this.subscriptionList.push(subscription);
  }

  latestMessages(channel: Channel) {
    this.latestMessagesWatch = true;
    const subscription = this.messageImplement.latestMessages(channel.id)
      .subscribe((messageList: Message[]) => {
        this.messageList = messageList;
        console.log(messageList);
      });
    this.subscriptionList.push(subscription);
  }

  postMessage(message: string) {
    this.loadingMessageList = [new Message({
      userId: EUserId.Sam,
      text: message,
      status: EMessageStatus.loader
    }), ...this.loadingMessageList];

    const subscription = this.messageImplement.sendMessage(
      this.channel?.id || EChannelId.Default, this.user?.id || EUserId.Default, message)
      .subscribe((message: Message) => {
        console.log(message);
      })
    this.subscriptionList.push(subscription);
  }

  getSelectedUser() {
    this.panelLeftStore.selectedUser$
      .subscribe((user: User | null) => this.user = user)
  }


  ngOnDestroy(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())

  }

}

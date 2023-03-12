import { Injectable } from '@angular/core';
import { Channel } from "@models/channel.model";
import { Message } from "@models/message.model";
import { EMessageStatus } from "@interfaces/message.interface";
import { PanelRightStoreService } from "./panel-right-store.service";
import { MessageImplementService } from "@implements/message/message-implement.service";
import { Subscription } from "rxjs";

@Injectable()
export class PrLatestMessagesImplementService {
  private subscriptionList: Array<Subscription> = [];
  private latestMessagesWatch: boolean = false;

  constructor(
    private panelRightStore: PanelRightStoreService,
    private messageImplement: MessageImplementService
  ) {
  }


  public loadLatestMessages(channel: Channel) {
    this.latestMessagesWatch ?
      this.refetchLatestMessages(channel) :
      this.latestMessages(channel);
  }

  private latestMessages(channel: Channel) {
    this.latestMessagesWatch = true;
    const subscription = this.messageImplement.latestMessages(channel.id)
      .subscribe({
        next: (messageList: Message[]) => {
          this.panelRightStore.totalMoreMessages = messageList.length;
          this.panelRightStore.localMessageList = this.panelRightStore.localMessageList
            .filter((message) => {
              return message.status !== EMessageStatus.check;
            });

          this.panelRightStore.addLocalMessageList(messageList);
        },
        error: () => {
          this.panelRightStore.messageList = [];
          this.panelRightStore.totalMoreMessages = 0;
        }
      });
    this.subscriptionList.push(subscription);
  }

  private refetchLatestMessages(channel: Channel) {
    this.panelRightStore.messageList = [];
    this.panelRightStore.totalMoreMessages = 0;
    this.panelRightStore.localMessageList = [];
    this.messageImplement.refetchLatestMessages(channel.id)
  }


  public destroyPrLatestMessagesImplement(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}

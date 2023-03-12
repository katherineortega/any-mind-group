import { Injectable } from '@angular/core';
import { PanelRightStoreService } from "./panel-right-store.service";
import { MessageImplementService } from "@implements/message/message-implement.service";
import { Subscription } from "rxjs";
import { EChannelId } from "@interfaces/channel.interface";
import { Message } from "@models/message.model";

@Injectable()
export class PrMoreMessagesImplementService {
  private subscriptionList: Array<Subscription> = [];
  private moreMessagesWatch: boolean = false;

  constructor(
    private panelRightStore: PanelRightStoreService,
    private messageImplement: MessageImplementService
  ) {
  }


  public loadMoreMessages() {
    this.moreMessagesWatch ?
      this.refetchMoreMessages() :
      this.moreMessages();
  }

  private moreMessages() {
    this.moreMessagesWatch = true;
    const lastMessageId = this.panelRightStore.messageList.slice(-1)[0];

    const subscription = this.messageImplement.moreMessages(
      this.panelRightStore.channel?.id || EChannelId.General,
      lastMessageId?.messageId || '',
      true)
      .subscribe((messageList: Message[]) => {
        this.panelRightStore.totalMoreMessages = messageList.length;
        this.panelRightStore.messageList = [...this.panelRightStore.messageList, ...messageList]
      });
    this.subscriptionList.push(subscription);
  }

  private refetchMoreMessages() {
    const lastMessageId = this.panelRightStore.messageList.slice(-1)[0];
    this.messageImplement.refetchMoreMessages(
      this.panelRightStore.channel?.id || EChannelId.General,
      lastMessageId?.messageId || '',
      true);
  }

  public destroyPrMoreMessagesImplement(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}

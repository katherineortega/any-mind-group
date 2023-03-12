import { Injectable } from '@angular/core';
import { Message } from "@models/message.model";
import { EUserId } from "@interfaces/user.interface";
import { EMessageStatus } from "@interfaces/message.interface";
import { EChannelId } from "@interfaces/channel.interface";
import { PanelRightStoreService } from "./panel-right-store.service";
import { Subscription } from "rxjs";
import { MessageImplementService } from "@implements/message/message-implement.service";
import { PanelRightImplementService } from "./panel-right-implement.service";

@Injectable()
export class PrPostMessageImplementService {
  private subscriptionList: Array<Subscription> = [];

  constructor(
    private panelRightStore: PanelRightStoreService,
    private panelRightImplement: PanelRightImplementService,
    private messageImplement: MessageImplementService
  ) {
  }


  public postMessage(message: string) {
    const localMessage = new Message({
      messageId: `${this.panelRightStore.localMessageList.length}`,
      userId: this.panelRightStore.user?.id || EUserId.Default,
      text: message,
      status: EMessageStatus.loader
    });
    localMessage.previousMessageId = this.panelRightStore.messageList[0]?.messageId || '';

    this.panelRightStore.localMessageList = [localMessage, ...this.panelRightStore.localMessageList];
    this.panelRightStore.addLocalMessageList();

    const subscription = this.messageImplement.sendMessage(
      this.panelRightStore.channel?.id || EChannelId.Default, this.panelRightStore.user?.id || EUserId.Default, message)
      .subscribe({
        next: (savedMessage: Message) => {
          this.updateLocalMessage(localMessage, savedMessage);
        },
        error: () => {
          this.updateLocalMessage(localMessage);
        }
      });
    this.subscriptionList.push(subscription);


  }

  private updateLocalMessage(localMessage: Message, savedMessage?: Message) {
    const updateMessage = (message: Message) => {
      if (localMessage.messageId === message.messageId) {
        if (savedMessage) {
          message.messageId = savedMessage.messageId;
          message.status = EMessageStatus.check;
        } else {
          message.status = EMessageStatus.error;
        }
      }
      return message;
    }

    this.panelRightStore.localMessageList = this.panelRightStore.localMessageList.map(updateMessage);
    this.panelRightStore.messageList = this.panelRightStore.messageList.map(updateMessage);
  }


  public retryMessage(postMessage: Message) {
    const updateMessage = (message: Message) => {
      if (postMessage.messageId === message.previousMessageId) {
        message.previousMessageId = postMessage.previousMessageId
      }
      return message.messageId !== postMessage.messageId;
    }
    this.panelRightStore.localMessageList = this.panelRightStore.localMessageList.filter(updateMessage);
    this.panelRightStore.messageList = this.panelRightStore.messageList.filter(updateMessage);

    this.postMessage(postMessage.text);
  }


  public destroyPrPostMessageImplement(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())

  }
}

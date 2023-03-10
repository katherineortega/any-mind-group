import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { EUserId } from "@interfaces/user.interface";
import { EChannelId } from "@interfaces/channel.interface";
import { LatestMessagesGraphqlService } from "@clients/graphql/latest-messages-graphql.service";
import { MoreMessagesGraphqlService } from "@clients/graphql/more-messages-graphql.service";
import { SendMessageGraphqlService } from "@clients/graphql/send-message-graphql.service";
import { IMessage } from "@interfaces/message.interface";
import { Message } from "@models/message.model";

@Injectable()
export class MessageImplementService {

  constructor(
    private latestMessagesGraphql: LatestMessagesGraphqlService,
    private moreMessagesGraphql: MoreMessagesGraphqlService,
    private sendMessageGraphql: SendMessageGraphqlService,
  ) {
  }

  latestMessages(channelId: EChannelId): Observable<Message[]> {
    return this.latestMessagesGraphql.latestMessages({channelId})
      .pipe(map((messageList: IMessage[]) => {
        return messageList?.length ? messageList
          .map((iMessage: IMessage) => new Message(iMessage)) : [];
      }));
  }

  refetchLatestMessages(channelId: EChannelId) {
    this.latestMessagesGraphql.refetchLatestMessages({channelId});
  }

  moreMessages(channelId: EChannelId, messageId: string, old: boolean): Observable<Message[]> {
    return this.moreMessagesGraphql.fetchMoreMessages(
      {channelId, messageId, old})
      .pipe(map((messageList: IMessage[]) => {
        return messageList?.length ? messageList
          .map((iMessage: IMessage) => new Message(iMessage)) : [];
      }));
  }


  refetchMoreMessages(channelId: EChannelId, messageId: string, old: boolean) {
    this.moreMessagesGraphql.refetchMoreMessages({channelId, messageId, old});
  }

  sendMessage(channelId: EChannelId, userId: EUserId, text: string): Observable<Message> {
    return this.sendMessageGraphql.postMessage({
      channelId: channelId, userId: userId, text: text
    })
      .pipe(map((iMessage: IMessage | any) => {
        return new Message(iMessage);
      }));
  }
}

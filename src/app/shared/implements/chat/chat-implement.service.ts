import { Injectable } from '@angular/core';
import { ChatClientService } from "@clients/chat/chat-client.service";
import { map, Observable } from "rxjs";
import { IUser } from "@interfaces/user.interface";
import { IChannel } from "@interfaces/channel.interface";
import { User } from "@models/user.model";
import { Channel } from "@models/channel.model";

@Injectable()
export class ChatImplementService {

  constructor(private chatClient: ChatClientService) {
  }

  userList(): Observable<Array<User>> {
    return this.chatClient.userList().pipe(
      map((iUserList: Array<IUser>) => {
          return iUserList?.length ? iUserList
            .map((iUser: IUser) => new User(iUser)) : [];
        }
      ));
  }

  channelList(): Observable<Array<Channel>> {
    return this.chatClient.channelList().pipe(
      map((iChannelList: Array<IChannel>) => {
          return iChannelList?.length ? iChannelList
            .map((iChannel: IChannel) => new Channel(iChannel)) : [];
        }
      ));
  }
}

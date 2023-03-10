import { EChannelName } from "@interfaces/channel.interface";
import { EUserId } from "@interfaces/user.interface";

export enum EMessageStatus {
  loader = 'loader',
  check = 'check',
  error = 'error'
}

export interface IMessage {
  messageId?: string;
  text: string;
  datetime?: string;
  userId: EUserId;
  status: EMessageStatus;
}

export interface LatestMessageParams {
  channelId: EChannelName | string;
}

export interface MoreMessageParams {
  channelId: EChannelName | string;
  messageId: string;
  old: boolean;
}


export interface SendMessageParams {
  channelId: EChannelName | string;
  text: string;
  userId: EUserId | string;
}

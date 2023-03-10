import { EMessageStatus, IMessage } from "@interfaces/message.interface";
import { EUserId } from "@interfaces/user.interface";

export class Message {
  messageId?: string;
  text: string;
  datetime?: string;
  userId: EUserId;
  status: EMessageStatus;

  constructor(iMessage: IMessage) {
    this.messageId = iMessage.messageId;
    this.text = iMessage.text;
    this.userId = iMessage.userId;
    this.status = iMessage.status || EMessageStatus.check;

    const date = iMessage.datetime ? new Date(iMessage.datetime) : new Date();
    let hours = this.checkTime(date.getHours());
    let minutes = this.checkTime(date.getMinutes())
    this.datetime = `${hours}:${minutes}`;
  }


  checkTime(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
}

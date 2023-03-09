import { EChannelId, EChannelName, IChannel } from "@interfaces/channel.interface";

export class Channel {
  public id: EChannelId;
  public name: EChannelName;

  constructor(iChannel: IChannel) {
    this.id = iChannel.id || '';
    this.name = iChannel.name || '';
  }
}

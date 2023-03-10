import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatImplementService } from "@implements/chat/chat-implement.service";
import { Channel } from "@models/channel.model";
import { ChannelStoreImplementService } from "@implements/store/channel-store-implement.service";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.sass']
})
export class ChannelListComponent implements OnInit {
  public channelList: Channel[] = [];
  public channelSelected: Channel | null = null;

  @Output() channel: EventEmitter<Channel> = new EventEmitter<Channel>();

  constructor(
    private chatImplement: ChatImplementService,
    private channelStoreImplement: ChannelStoreImplementService,
  ) {
  }

  ngOnInit(): void {
    this.getChannelList();
  }

  getChannelList() {
    this.chatImplement.channelList()
      .subscribe((channelList: Channel[]) => {
        this.channelList = channelList;
        const storedChannel = this.channelStoreImplement.getStoredChannel();
        this.setSelectedChannel(storedChannel ? storedChannel : channelList[0]);
      })
  }

  setSelectedChannel(channel: Channel) {
    if (this.channelSelected?.id !== channel.id) {
      this.channelSelected = channel;
      this.channelStoreImplement.setStoredChannel(channel);
      this.channel.emit(this.channelSelected);
    }
  }

}

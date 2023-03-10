import { Component, OnInit } from '@angular/core';
import { User } from "@models/user.model";
import { Channel } from "@models/channel.model";
import { PanelLeftStoreService } from "./panel-left-store.service";

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.sass']
})
export class PanelLeftComponent implements OnInit {

  constructor(
    private panelLeftStore: PanelLeftStoreService
  ) {
  }

  ngOnInit(): void {
  }

  userSelected(user: User) {
    this.panelLeftStore.selectedUser = user;
  }

  userList(userList: User[]) {
    this.panelLeftStore.userList = userList;
  }

  channelSelected(channel: Channel) {
    this.panelLeftStore.selectedChannel = channel;
  }

}

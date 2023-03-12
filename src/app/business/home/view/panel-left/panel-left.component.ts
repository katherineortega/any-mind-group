import { Component, OnInit } from '@angular/core';
import { User } from "@models/user.model";
import { Channel } from "@models/channel.model";
import { PanelLeftImplementService } from "./services/panel-left-implement.service";

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.sass']
})
export class PanelLeftComponent implements OnInit {

  constructor(
    private panelLeftImplement: PanelLeftImplementService
  ) {
  }

  ngOnInit(): void {
  }

  userSelected(user: User) {
    this.panelLeftImplement.selectedUser = user;
  }

  userList(userList: User[]) {
    this.panelLeftImplement.userList = userList;
  }

  channelSelected(channel: Channel) {
    this.panelLeftImplement.selectedChannel = channel;
  }

}

import { Injectable } from '@angular/core';
import { combineLatest, Subscription } from "rxjs";
import { Channel } from "@models/channel.model";
import { User } from "@models/user.model";
import { PanelRightStoreService } from "./panel-right-store.service";
import { PanelLeftImplementService } from "../../panel-left/services/panel-left-implement.service";
import { PrLatestMessagesImplementService } from "./pr-latest-messages-implement.service";

@Injectable()
export class PanelRightImplementService {
  private subscriptionList: Array<Subscription> = [];

  constructor(
    private panelRightStore: PanelRightStoreService,
    private prLatestMessagesImplement: PrLatestMessagesImplementService,
    private panelLeftImplement: PanelLeftImplementService,
  ) {
  }


  public getChannelAndUserList() {
    const selectedChannel$ = this.panelLeftImplement.selectedChannel$;
    const userList$ = this.panelLeftImplement.userList$;

    const subscription1 = combineLatest([selectedChannel$, userList$])
      .subscribe(([channel, userList]: [Channel | null, User[]]) => {
        this.panelRightStore.channel = channel;
        this.panelRightStore.userList = userList;

        if (!!this.panelRightStore.channel) {
          this.prLatestMessagesImplement.loadLatestMessages(this.panelRightStore.channel)
        }
      })
    this.subscriptionList.push(subscription1);
  }

  public getSelectedUser() {
    this.panelLeftImplement.selectedUser$
      .subscribe((user: User | null) => {
        this.panelRightStore.user = user;
      })
  }


  public destroyPanelRightImplement(): void {
    this.subscriptionList
      .forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}

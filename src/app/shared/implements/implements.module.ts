import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatImplementService } from "@implements/chat/chat-implement.service";
import { ClientsModule } from "@clients/clients.module";
import { MessageImplementService } from "@implements/message/message-implement.service";
import { UserStoreImplementService } from "@implements/store/user-store-implement.service";
import { ChannelStoreImplementService } from "@implements/store/channel-store-implement.service";
import { TextStoreImplementService } from "@implements/store/text-store-implement.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientsModule
  ],
  providers: [
    ChatImplementService,
    MessageImplementService,
    UserStoreImplementService,
    ChannelStoreImplementService,
    TextStoreImplementService
  ]

})
export class ImplementsModule {
}

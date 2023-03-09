import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from "@clients/http/http-client.service";
import { ChatClientService } from "@clients/chat/chat-client.service";
import { LatestMessagesGraphqlService } from "@clients/graphql/latest-messages-graphql.service";
import { MoreMessagesGraphqlService } from "@clients/graphql/more-messages-graphql.service";
import { SendMessageGraphqlService } from "@clients/graphql/send-message-graphql.service";
import { LocalStoreClientService } from "@clients/store/local-store-client.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClientService,
    ChatClientService,
    LatestMessagesGraphqlService,
    MoreMessagesGraphqlService,
    SendMessageGraphqlService,
    LocalStoreClientService
  ]
})
export class ClientsModule {
}

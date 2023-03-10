import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PanelLeftComponent } from './view/panel-left/panel-left.component';
import { PanelRightComponent } from './view/panel-right/panel-right.component';
import { ImplementsModule } from "@implements/implements.module";
import { UserListComponent } from './components/user-list/user-list.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ClientsModule } from "@clients/clients.module";
import { TypeMessageComponent } from './components/type-message/type-message.component';
import { ShowcaseMessageComponent } from './components/showcase-message/showcase-message.component';
import { AtomsModule } from "@atoms/atoms.module";
import { FormsModule } from "@angular/forms";
import { OrganismsModule } from "@organisms/organisms.module";
import { PipesModule } from "../../shared/pipes/pipes.module";
import { PanelRightStoreService } from "./view/panel-right/services/panel-right-store.service";
import { PanelLeftImplementService } from "./view/panel-left/services/panel-left-implement.service";
import { PanelRightImplementService } from "./view/panel-right/services/panel-right-implement.service";
import { PrLatestMessagesImplementService } from "./view/panel-right/services/pr-latest-messages-implement.service";
import { PrMoreMessagesImplementService } from "./view/panel-right/services/pr-more-messages-implement.service";
import { PrPostMessageImplementService } from "./view/panel-right/services/pr-post-message-implement.service";


@NgModule({
  declarations: [
    HomeComponent,
    PanelLeftComponent,
    PanelRightComponent,
    UserListComponent,
    ChannelListComponent,
    TypeMessageComponent,
    ShowcaseMessageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImplementsModule,
    ClientsModule,
    AtomsModule,
    FormsModule,
    OrganismsModule,
    PipesModule
  ],
  providers: [
    PanelLeftImplementService,
    PanelRightStoreService,
    PanelRightImplementService,
    PrLatestMessagesImplementService,
    PrMoreMessagesImplementService,
    PrPostMessageImplementService
  ]
})
export class HomeModule {
}

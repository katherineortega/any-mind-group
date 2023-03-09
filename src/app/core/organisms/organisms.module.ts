import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from "@atoms/atoms.module";
import { MessageCardComponent } from './message-card/message-card.component';



@NgModule({
  declarations: [

    MessageCardComponent
  ],
    exports: [
        MessageCardComponent
    ],
  imports: [
    CommonModule,
    AtomsModule
  ]
})
export class OrganismsModule { }

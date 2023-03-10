import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from "./reverse.pipe";


@NgModule({
  declarations: [
    ReversePipe
  ],
  exports: [
    ReversePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}

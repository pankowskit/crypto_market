import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapRoutingModule } from './swap-routing.module';
import { SwapComponent } from './swap/swap.component';


@NgModule({
  declarations: [
    SwapComponent
  ],
  imports: [
    CommonModule,
    SwapRoutingModule
  ]
})
export class SwapModule { }

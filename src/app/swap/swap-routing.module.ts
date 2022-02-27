import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapComponent } from './swap/swap.component';

const routes: Routes = [
  {
    path: "swap",
    component: SwapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwapRoutingModule { }

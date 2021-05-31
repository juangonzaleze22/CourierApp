import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersChefPage } from './orders-chef.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersChefPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayOrdersPageRoutingModule } from './pay-orders-routing.module';

import { PayOrdersPage } from './pay-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayOrdersPageRoutingModule
  ],
  declarations: [PayOrdersPage]
})
export class PayOrdersPageModule {}

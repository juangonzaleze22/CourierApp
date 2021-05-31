import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersChefPageRoutingModule } from './orders-chef-routing.module';
import { IonicRatingModule } from "ionic4-rating";
import { OrdersChefPage } from './orders-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    OrdersChefPageRoutingModule
  ],
  declarations: [OrdersChefPage]
})
export class OrdersChefPageModule {}

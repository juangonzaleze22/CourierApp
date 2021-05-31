import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChefPageRoutingModule } from './home-chef-routing.module';
import { IonicRatingModule } from "ionic4-rating";
import { HomeChefPage } from './home-chef.page';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    HomeChefPageRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [HomeChefPage]
})
export class HomeChefPageModule {}

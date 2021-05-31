import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseToMePageRoutingModule } from './close-to-me-routing.module';
import { IonicRatingModule } from "ionic4-rating";

import { CloseToMePage } from './close-to-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    CloseToMePageRoutingModule
  ],
  declarations: [CloseToMePage]
})
export class CloseToMePageModule {}

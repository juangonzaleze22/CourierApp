import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracingPageRoutingModule } from './tracing-routing.module';
import { IonicRatingModule } from "ionic4-rating";
import { TracingPage } from './tracing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    TracingPageRoutingModule
  ],
  declarations: [TracingPage]
})
export class TracingPageModule {}

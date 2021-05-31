import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlatesPageRoutingModule } from './add-plates-routing.module';

import { AddPlatesPage } from './add-plates.page';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlatesPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [AddPlatesPage]
})
export class AddPlatesPageModule {}

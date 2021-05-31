import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlatesPage } from './add-plates.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlatesPageRoutingModule {}

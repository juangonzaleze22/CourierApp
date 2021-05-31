import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseToMePage } from './close-to-me.page';

const routes: Routes = [
  {
    path: '',
    component: CloseToMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseToMePageRoutingModule {}

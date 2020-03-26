import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NyhedPage } from './nyhed.page';

const routes: Routes = [
  {
    path: '',
    component: NyhedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NyhedPageRoutingModule {}

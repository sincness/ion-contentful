import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenestePage } from './seneste.page';

const routes: Routes = [
  {
    path: '',
    component: SenestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenestePageRoutingModule {}

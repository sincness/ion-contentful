import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenestePageRoutingModule } from './seneste-routing.module';

import { SenestePage } from './seneste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenestePageRoutingModule
  ],
  declarations: [SenestePage]
})
export class SenestePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NyhedPageRoutingModule } from './nyhed-routing.module';

import { NyhedPage } from './nyhed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NyhedPageRoutingModule
  ],
  declarations: [NyhedPage]
})
export class NyhedPageModule {}

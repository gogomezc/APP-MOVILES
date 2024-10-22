import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneratorPageRoutingModule } from './qrgenerator-routing.module';

import { QrgeneratorPage } from './qrgenerator.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrgeneratorPageRoutingModule,
    QrCodeModule
  ],
  declarations: [QrgeneratorPage]
})
export class QrgeneratorPageModule {}

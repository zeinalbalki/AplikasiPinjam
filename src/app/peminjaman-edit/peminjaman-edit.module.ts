import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanEditPageRoutingModule } from './peminjaman-edit-routing.module';

import { PeminjamanEditPage } from './peminjaman-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanEditPageRoutingModule
  ],
  declarations: [PeminjamanEditPage]
})
export class PeminjamanEditPageModule {}

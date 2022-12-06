import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeminjamanEditPage } from './peminjaman-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PeminjamanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeminjamanEditPageRoutingModule {}

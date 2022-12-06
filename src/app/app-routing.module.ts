import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'peminjaman',
    loadChildren: () => import('./peminjaman/peminjaman.module').then( m => m.PeminjamanPageModule)
  },
  {
    path: 'peminjaman-tambah',
    loadChildren: () => import('./peminjaman-tambah/peminjaman-tambah.module').then( m => m.PeminjamanTambahPageModule)
  },
  {
    path: 'peminjaman-edit/:kode_peminjaman',
    loadChildren: () => import('./peminjaman-edit/peminjaman-edit.module').then( m => m.PeminjamanEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

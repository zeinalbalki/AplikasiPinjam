import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
/* import { PageOneComponent } from './page-one.component'; */

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.page.html',
  styleUrls: ['./peminjaman.page.scss'],
})
export class PeminjamanPage {
  /* component = PageOneComponent; */

  kode_peminjaman: any;
  nama: any;
  nim: any;
  nama_lembaga: any;
  jenis_peminjaman: any;
  peminjaman: any;

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router
  ) { 
    this.getPeminjaman();
  }

  ionViewDidEnter(){
    console.log("jika selesai loading");
    this.getPeminjaman();
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init');
  }

  getPeminjaman(){
    this._apiService.getPeminjaman().subscribe((res:any)=>{
      console.log("sukses", res);
      this.peminjaman = res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: "Notifikasi",
        message: 'Gagal memuat data peminjaman',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      })
    })
  }

  deletePeminjaman(id){
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any)=>{
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any)=>{
            // jika tekan yakin
            this._apiService.deletePeminjaman(id).subscribe((res:any)=>{
              console.log("sukses", res);
              this.getPeminjaman();
            },(error: any)=>{
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'Gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res=>{
                res.present();
              })
            })
          }
        }
      ]
    }).then(res=>{
      res.present();
    })
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}

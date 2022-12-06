import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-peminjaman-edit',
  templateUrl: './peminjaman-edit.page.html',
  styleUrls: ['./peminjaman-edit.page.scss'],
})
export class PeminjamanEditPage implements OnInit {
  kode_peminjaman: any;
  nama: any;
  nim: any;
  nama_lembaga: any;
  jenis_peminjaman: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController

  ) {
    this.route.params.subscribe((param:any)=>{
      this.kode_peminjaman = param.kode_peminjaman;
      console.log(this.kode_peminjaman);
      this.ambilPeminjaman(this.kode_peminjaman);
    })
   }

  ngOnInit() {
  }

  ambilPeminjaman(kode_peminjaman){
    this._apiService.ambilPeminjaman(kode_peminjaman).subscribe((res:any)=>{
      console.log('sukses', res);
      let peminjaman = res;
      this.nama = peminjaman.nama;
      this.nim = peminjaman.nim;
      this.nama_lembaga = peminjaman.nama_lembaga;
      this.jenis_peminjaman = peminjaman.jenis_peminjaman; 
    }, (error: any) =>{
      console.log('error', error);
      alert('gagal ambil data');
    })

  }

  editPeminjaman(){
    let url = this._apiService.apiURL()+"/edit.php";
    Http.request({
      method : "POST",
      url : url,
      headers : {"Content-Type" : "application/json"},
      data : {
        kode_peminjaman : this.kode_peminjaman,
        nama : this.nama,
        nim : this.nim,
        nama_lembaga : this.nama_lembaga,
        jenis_peminjaman : this.jenis_peminjaman,
      },
    }).then((data)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Berhasil edit data Peminjaman',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/peminjaman');
    }, (error)=>{
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal edit data Peminjaman',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
    })
  }

}

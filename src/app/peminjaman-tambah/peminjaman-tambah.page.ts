import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';


@Component({
  selector: 'app-peminjaman-tambah',
  templateUrl: './peminjaman-tambah.page.html',
  styleUrls: ['./peminjaman-tambah.page.scss'],
})
export class PeminjamanTambahPage implements OnInit {
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

  ) { }

  ngOnInit() {
  }

  addPeminjaman(){
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type":"application/json" },
      data: {
        kode_peminjaman: this.kode_peminjaman,
        nama: this.nama,
        nim: this.nim,
        nama_lembaga: this.nama_lembaga,
        jenis_peminjaman: this.jenis_peminjaman,
      },
    }).then((data)=>{
        this.kode_peminjaman = '';
        this.nama = '';
        this.nim = '';
        this.nama_lembaga = '';
        this.jenis_peminjaman = '';
        this.alertController.create({
          header: 'Notifikasi',
          message: 'Berhasil input data Peminjaman',
          buttons: ['OK'],
        }).then(res=>{
          res.present();
      });
      this.router.navigateByUrl('/peminjaman');
    }, (error)=>{
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal input data Peminjaman',
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
    })

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  // link API
  apiURL(){
    return "http://localhost/api_tugas_crudauth"
  }

  getPeminjaman(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  deletePeminjaman(id){
    return this.http.delete(this.apiURL()+'/hapus.php?kode_peminjaman='+id);
  }
  ambilPeminjaman(id){
    return this.http.get(this.apiURL()+'/lihat.php?kode_peminjaman='+id);
  }
}

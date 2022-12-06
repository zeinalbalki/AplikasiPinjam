<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$kode_peminjaman = trim($data['kode_peminjaman']);
$nim = trim($data['nim']);
$nama = trim($data['nama']);
$nama_lembaga = trim($data['nama_lembaga']);
$jenis_peminjaman = trim($data['jenis_peminjaman']);

$query = mysqli_query($con, "insert into peminjaman(kode_peminjaman, nim, nama, nama_lembaga, jenis_peminjaman) values('$kode_peminjaman', '$nim','$nama','$nama_lembaga', '$jenis_peminjaman')");
if($query){
    http_response_code(201);
    $pesan['status'] = 'sukses';
}else{
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($con);
?>
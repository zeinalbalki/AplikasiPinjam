<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$kode_peminjaman = $data['kode_peminjaman'];
$nama = $data['nama'];
$nim = $data['nim'];
$nama_lembaga = $data['nama_lembaga'];
$jenis_peminjaman = $data['jenis_peminjaman'];

$query = mysqli_query($con, "update peminjaman set nama='$nama', nim='$nim', nama_lembaga='$nama_lembaga', jenis_peminjaman='$jenis_peminjaman' where kode_peminjaman='$kode_peminjaman'");
if($query){
    http_response_code(201);
    $pesan['status'] = 'sukses';
}
else{
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($con);
?>
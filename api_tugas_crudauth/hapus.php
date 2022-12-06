<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$pesan = [];

$kode_peminjaman = $_GET['kode_peminjaman'];
$query = mysqli_query($con, "delete from peminjaman where kode_peminjaman = '$kode_peminjaman'");
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
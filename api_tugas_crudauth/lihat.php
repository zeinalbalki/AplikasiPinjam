<?php
require 'koneksi.php';

$data = [];
$kode_peminjaman = $_GET['kode_peminjaman'];
$query = mysqli_query($con, "select * from peminjaman where kode_peminjaman = '$kode_peminjaman'");
$jumlah = mysqli_num_rows($query);
if($jumlah == 1){
    $row = mysqli_fetch_object($query);
    $data = $row;
}

echo json_encode($data);
echo mysqli_error($con);
?>
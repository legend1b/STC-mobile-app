<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

require_once('block_io.php');

$apiKey = "48b1-5be1-cfe1-1a00";
$version = 2; // API version
$pin = "Olayinka811";
$block_io = new BlockIo($apiKey, $pin, $version);

$conn = new mysqli("localhost", 'doprhorl_user', 'Olayinka811@' , 'doprhorl_userlog');

if(isset($_POST['addy']) && isset($_POST['amount']) && isset($_POST['addyto'])){
	$addy = $_POST['addy'];
	$amount = $_POST['amount'];
	$addyto = $_POST['addyto'];

$sendcoin = $block_io->withdraw_from_addresses(array('amounts' => $amount, 'from_addresses' => $addy, 'to_addresses' => $addyto));
if ($sendcoin) {
	echo 'sent';
}
 
}

?>
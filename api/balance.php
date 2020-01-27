<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

require_once('block_io.php');

$apiKey = "48b1-5be1-cfe1-1a00";
$version = 2; // API version
$pin = "Olayinka811";
$block_io = new BlockIo($apiKey, $pin, $version);

$conn = new mysqli("localhost", 'doprhorl_user', 'Olayinka811@' , 'doprhorl_userlog');

if(isset($_POST['addy'])){
$addresss = $_POST['addy'];
$balance = $block_io->get_address_balance(array('addresses' => $addresss));
 $realbalance = $balance->balances->available_balance;
 $realAvail = $realbalance / 4;
 echo round($realAvail, 2);
}

?>
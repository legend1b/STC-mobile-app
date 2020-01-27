<?php
require_once('block_io.php');

$apiKey = "48b1-5be1-cfe1-1a00";
$version = 2; // API version
$pin = "Olayinka811";
$block_io = new BlockIo($apiKey, $pin, $version);

$value = $block_io->get_current_price(array('price_base' => 'USD'));

echo $btcvalue = $value->data->prices[0]->price;
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

require_once('block_io.php');

$apiKey = "48b1-5be1-cfe1-1a00";
$version = 2; // API version
$pin = "Olayinka811";
$block_io = new BlockIo($apiKey, $pin, $version);

$conn = new mysqli("localhost", 'doprhorl_user', 'Olayinka811@' , 'doprhorl_userlog');



if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	$emailcheck = $conn->query("SELECT * FROM userlog WHERE email ='$email'");
							 $emailcheck_num = $emailcheck->num_rows;
		if ($emailcheck_num > 0) {
			echo "wrong";
		}
		else{
			$newAddressInfo = $block_io->get_new_address(array('label' => $email));
			$addresss = $newAddressInfo->data->address;

		    $sql = $conn->query("INSERT INTO userlog(id,name,email,password,address) VALUES(0, '$name','$email','$password', '$addresss')");
		   if ($sql) {
		   	echo $addresss;
		   }
		}


	
}

?>
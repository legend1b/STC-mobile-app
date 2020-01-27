<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");

require_once('block_io.php');

$apiKey = "48b1-5be1-cfe1-1a00";
$version = 2; // API version
$pin = "Olayinka811";
$block_io = new BlockIo($apiKey, $pin, $version);

$conn = new mysqli("localhost", 'doprhorl_user', 'Olayinka811@' , 'doprhorl_userlog');



if(isset($_POST['enteremail']) && isset($_POST['enterpassword'])){
	$email = $_POST['enteremail'];
	$password = $_POST['enterpassword'];

	$emailcheck = $conn->query("SELECT * FROM userlog WHERE email ='$email' AND password='$password' ");
							 $emailcheck_num = $emailcheck->num_rows;
		if ($emailcheck_num > 0) {
			while ($list = $emailcheck->fetch_assoc()) {
							$name = $list['name'];
							$email = $list['email'];
							$password = $list['password'];
							$address = $list['address'];
				echo $name." ".$email." ".$password." ".$address;
			}
		}
		else{
			echo "wrong";
		}
	
}

?>
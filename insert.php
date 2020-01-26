<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//include ('connect.php');
$conn = new mysqli("localhost", 'root', '' , 'swiftcoin');

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];
    $sql = $conn->query("INSERT INTO userlog(id,name,email,password) VALUES('', '$name','$email','$password')");
   if ($sql) {
   	echo "great";
   }
}

?>
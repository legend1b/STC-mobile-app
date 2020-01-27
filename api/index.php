<?php
$conn = new mysqli("localhost", 'doprhorl_user', 'Olayinka811@' , 'doprhorl_userlog');
$sql = $conn->query("INSERT INTO userlog(id,name,email,password,address) VALUES(0, '$name','$email','$password' $addresss)");
?>
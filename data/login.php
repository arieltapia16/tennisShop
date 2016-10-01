<?php  header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
include "db.php";

$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

$user= $request->user;

$pass= md5($request->pass);


$sql='SELECT user,pass,id FROM users WHERE user=:user AND pass=:pass';


$stmt = $conn->prepare($sql);
$stmt->bindParam(':user', $user);
$stmt->bindParam(':pass', $pass);

$stmt->execute();
$result = $stmt->fetchAll();


if (count($result) == 1) {

echo "access";
}else {
    echo "no_access";
}

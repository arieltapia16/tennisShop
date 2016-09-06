<?php

$con = mysqli_connect('localhost', 'root', '123456', 'tenisShop');
/*$con = mysqli_connect('localhost', 'picadacl_estela', 'Quesitos2014', 'picadacl_picada');
mysqli_query($con,"SET NAMES 'utf8'");// Soluciona acentos y eñes
header("Content-Type: text/html;charset=utf-8");
if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
*/

$sql="SELECT * FROM articulos";
$result=mysqli_query($con,$sql);

while ($fila=mysqli_fetch_array($result)) {
	$id=$fila['id'];
	$articulo=$fila['articulo'];
	$precio=$fila['precio'];
	$deporte=$fila['deporte'];
	$marca=$fila['marca'];
};
	
	echo json_encode($tenis);		

?>
<?php
include "db.php";

$gsent = $conn->prepare("SELECT name, colour FROM fruit");
$gsent->execute();

/* Obtener todas las filas restantes del conjunto de resultados */
print("Obtener todas las filas restantes del conjunto de resultados:\n");
$resultado = $gsent->fetchAll();
print_r($resultado);
?>

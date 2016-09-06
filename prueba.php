<!DOCTYPE html>
<html>
<head>
	<title> La práctica hace al maestro  </title>
	<link type='text/css' rel='stylesheet' href='style.css'/>
</head>
<body>
	<p>

		<?php
		class Perro{
			public $cantidadDePatas=4;
			public $nombre;
			public function ladrar(){
				return "¡Guau!";
			}
			public function saludo($v){
				return "Hola mi nombre es ". $this->nombre=$v;
			}

			public function construct($nombre){

				$this->nombre($nombre);
			}
		}
		$perro1 = new Perro('Pluto');
		$perro2 = new Perro();


		echo $perro1->ladrar();
		echo $perro2->saludo('amigo').'<br>';

		?>
	</p>
</body>
</html>

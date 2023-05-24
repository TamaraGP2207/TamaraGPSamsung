<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="style_formulario_php.css">
	<title>Práctica 6 PHP</title>
	
</head>
<body>
	
	<form action=" " method="POST">
		<h1> Formulario de alta </h1>
	<div class="grupo">
			<h4> Datos Obligatorios<span class="asterisco">*</span> </h4>
	</div>
	
    <div class="datos">
			<input type="text" class="medio" id="inom" name="fnom" required>
			<br>
			<label for="inom"> Nombre<span class="asterisco">*</span> </label>
			<br>
			<br>
			<input type="text" class="largo" id="iape" name="fape" required>
			<br>
			<label for="iape"> Apellidos<span class="asterisco">*</span></label>
			<br>
			<br>
			<input type="email" class="largo" name="fema" required>
			<br>
			<label for="iema"> Email<span class="asterisco">*</span></label>

	</div>
		<br>
		<br>
	<input type="submit" class="boton" name="alta" value="Darme de alta">	

<?php
if($_POST) {
//recuperamos las variables del formulario
$nombre=$_POST['fnom'];
$apellido=$_POST['fape'];
$email=$_POST['fema'];


//conectamos con el servidor
$conexion=mysqli_connect('localhost', 'root','','cursosql');


//verificamos la conexión
if(!$conexion) {
    echo "No conecta con el servidor";
} 

//hacemos la consulta
$consulta="INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";

//ejecutamos la consulta
$ejecutar=mysqli_query($conexion, $consulta);

//verificamos la ejecución
    if(!$ejecutar) {
        echo "Se ha producido un error, inténtelo de nuevo";
    } else {
        echo "Dado de alta correctamente";
    }
}

?>
	</form>
</body>
</html>
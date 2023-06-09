
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Registro</title>
    <style type="text/css">
        body {
            text-align: center;
        }
        .mensaje {
            width: 50%;
            background-color: ghostwhite;
            color: navy;
            font-size: 22px;
            margin: 10px auto;
        }
    </style>
</head>

<body>
<?php

//recuperamos las variables del formulario
$nombre=$_POST['fnom'];
$prim_ape=$_POST['fprim_ape'];
$seg_ape=$_POST['fseg_ape'];
$email=$_POST['fema'];
$login=$_POST['flog'];
$contra=$_POST['fpas'];
$mensaje=" ";
$mensaje_registro=" ";

//conectamos con el servidor
$conexion=mysqli_connect('localhost', 'root', '', 'laboratorio_final');

//verificamos la conexión
if(!$conexion) {
    $mensaje= "No conecta con el servidor";
} 

//hacemos el registro
$registro="INSERT INTO registro (nombre, primer_apellido, segundo_apellido, email, login, password)
VALUES ('$nombre', '$prim_ape', '$seg_ape', '$email', '$login', '$contra')";

//ejecutamos la inserción del registro en la db
$insercion=mysqli_query($conexion, $registro);

//verificamos la insercion
    if(!$insercion) {
        $mensaje_registro= "Se ha producido un error, inténtelo de nuevo";
    } else {
        $mensaje_registro= "Registro agregado a la base de datos";
    }

?>
    <div class="mensaje">
        <?php
            echo $mensaje_registro;
            mysqli_close($conexion);
        ?>
    </div>

</body>
</html>

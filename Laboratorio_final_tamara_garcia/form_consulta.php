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

        table {
		width: 60%;
		text-align: left;
		margin: 10px auto;
		font-size: 1.2em;
		border-collapse: collapse;
        background-color: ghostwhite;
        border: 2px solid black;
        box-shadow: 3px 3px 6px black;
	    }

        tr:nth-child(even) {
        	background-color: #6da9ff;
        }

		th {
			background-color: #a9c3ff;;
		}
	
        th, td, table {
		padding: 4px;
	    }
    </style>
</head>

<body>
<?php

//conectamos con el servidor
$conexion=mysqli_connect('localhost', 'root', '', 'laboratorio_final');

//verificamos la conexión
if(!$conexion) {
    $mensaje= "No conecta con el servidor";
} 

//hacemos la consulta de registros en la db
    $consulta =" SELECT nombre, primer_apellido, segundo_apellido, email FROM registro ";

//efectuamos la consulta
    $resultado=mysqli_query($conexion, $consulta);

//verificamos la consulta
    if(!$consulta) {
        $mensaje_consulta= "Error: No se ha podido realizar la consulta";
    } else {
//obtenemos el número de coincidencias:(1,2,3...)
$num_resultado= mysqli_num_rows($resultado);

//movemos el primer registro a row_resultado y avanzamos el puntero al siguiente registro
$row_resultado= mysqli_fetch_assoc($resultado); 
    }

?>

<table>
    <tr>
		<th colspan="4"><?php echo "Encontrados: $num_resultado registros"?></th>
	</tr>
	<tr>
		<th>Nombre</th>
		<th>Primer Apellido</th>
		<th>Segundo Apellido</th>
		<th>Email</th>
	</tr>
	<?php
	//creamons un bucle do: haz esto mientras haya registros...
	do { 
    ?>
    <tr>
        <td><?php echo $row_resultado['nombre'];?></td>
        <td><?php echo $row_resultado['primer_apellido'];?></td>
        <td><?php echo $row_resultado['segundo_apellido'];?></td>
        <td><?php echo $row_resultado['email'];?></td>
    </tr>

    <?php
    //mientras pueda avanzar al siguiente registro   
	} while($row_resultado= mysqli_fetch_assoc($resultado));

    //cerramos conexión
    mysqli_close($conexion);
	?>

</table>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $name_db= "Campeonatos";

    //ESTABLECER CONEXION
    $conexion = mysqli_connect($host,$user,$pass,$name_db);

    //crear y ejecutar consultas;
    $query1="SELECT * FROM JUEGOS";
    $resultado = mysqli_query($conexion,$query1);

    //mysqli_fetch_row();
    //mysqli_fetch_assoc();
    //obtener resultados
    while($registro = mysqli_fetch_assoc($resultado)){
        echo "El codigo del juego es" . $registro["IdJuego"].
        ", Nombre del juego: ".$registro["nombreJuego"].
        ", Nombre del delegado es: ".$registro["delegado"]."<br>";
    }
    echo "<br><br>";

    $resultado2 = mysqli_query($conexion,$query1);
    while($registro = mysqli_fetch_row($resultado2)){
        echo "El codigo del juego es" . $registro[0].
        ", Nombre del juego: ".$registro[1].
        ", Nombre del delegado es: ".$registro[4]."<br>";
    }
    
    ?>
</body>
</html>
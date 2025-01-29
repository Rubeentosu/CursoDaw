<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <?php 
    //Comprobamos que se ha enviado el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //controlamos que no se introduzcan caracteres espaciales
        $usuario1 = htmlspecialchars($_POST["nombre1"]);
        $usuario2 = htmlspecialchars($_POST["nombre2"]);
        $usuario3 = htmlspecialchars($_POST["nombre3"]);
        //Almacenamos los nombres en un array
        $nombres = [$usuario1,$usuario2,$usuario3];
        //ordenamos el array de forma alfabética
        sort($nombres);
        //Esta variable irá guardando el numero de personas que hay
        $i = 0;
        echo "<h1>Rubén Torrico Suárez</h1>";
        echo "<h3>Nombres ordenamos alfabéticamente</h3>";
        //recorro el array
        foreach( $nombres as $key){
            //si la clave no es null significa que se ha introducido un nombre
            if($key != null){
                //sumo el contador
                $i += 1; 
            ?>
        <!-- Mostramos cada nombre en una lista -->
        <ul>
            <li><?php echo $key ?></li>
        </ul>
        <?php 
        }
        }
        //mostramos el numero de nombre introducido
        echo "<p>El numero total de mombres $i</p>";
        
    }else{?>
        <!-- Si el formulario no ha sido enviado mostramos el formulario -->
        <h2>Rubén Torrico Suárez</h2>
        <form action="Ejercicio2.php" method="post">
        <label for="nombre1">Nombre 1: </label>
        <input type="text" name="nombre1">
        <br><br>

        <label for="nombre2">Nombre 2: </label>
        <input type="text" name="nombre2">
        <br><br>

        <label for="nombre3">Nombre 3: </label>
        <input type="text" name="nombre3">
        <br><br>
        <button type="submit">Enviar</button>
    </form> <?php
    }
    ?>
</body>
</html>
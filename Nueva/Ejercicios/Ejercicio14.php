<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>
<body>
    <h1>Ejercicio 14 - Arrays</h1>
    <?php 
    $articulos = [
        ["Teclado",58],
        ["Raton",32],
        ["Impresora",185],
        ["Altavoz",62],
        ["Auriculares",36],
        ["Monitor",102],
        ["Webcam",47]
    ];

    //mostrar los elementos con var_export
    echo "<h2>El var_export del array articulos es: </h2>";
    var_export($articulos);

    //tabla de todos los articulos
    echo "<h2>El array articulos es: </h2>";
    echo "<table>";
    echo "<tr><th>Articulo</th><th>Precio(€)</th></tr>";
    // echo "<tr><td>";
    // foreach($articulos as $n){
    //     echo $n[0]."<br>";
    // }
    // echo "</td>";
    // echo "<td>";
    // foreach($articulos as $n){
    //     echo $n[1]."<br>";
    // }
    // echo "</td>";
    // echo "</tr>";
    foreach($articulos as $n){
        echo "<tr><td>".$n[0]."</td> <td>".$n[1]."</td></tr>";
    }
    echo "</table>";

    //meter en el art_original todos los elementos del array articulos
    $art_original  = $articulos;

    //meter en un array llamado arrayVacio los elementos menores de 50€
    foreach($articulos as $n){
        if($n[1] < 50){
            $arrayVacio[] = $n;
        }
    }

    //muestro en una tabal el contenido del arrayVacio
    echo "<h2>Los articulos que su precio es menor de 50 es: </h2>";
    echo "<table>";
    echo "<tr><th>Articulo</th><th>Precio(€)</th></tr>";
    foreach($arrayVacio as $n){
        echo "<tr><td>".$n[0]."</td> <td>".$n[1]."</td></tr>";
    }
    echo "</table>";

    echo "</table>";

    //Cambiar el precio de esos ariculos
    foreach($arrayVacio as & $p){
        $p[1] = ($p[1]*0.15)+$p[1];
        //unset($p) para romper una referencia
    }

    //Mostramos que se le añade un 15%
    echo "<h2>Los articulos con el 15% es: </h2>";
    echo "<table>";
    echo "<tr><th>Articulo</th><th>Precio(€)</th></tr>";
    foreach($arrayVacio as $n){
        echo "<tr><td>".$n[0]."</td> <td>".$n[1]."</td></tr>";
    }
    echo "</table>";

    echo "</table>";

    //saco del array primero todos los elementos que son mayores a 50€
    foreach($articulos as $n){
        if($n[1] > 50){
            $precio_art[] = $n;
        }
    }
    //meto en el array precio_art todos los articulos con su precio modificado
    $precio_art = array_merge($precio_art,$arrayVacio);

    //Mostramos el array anterior con todos los elementos
    echo "<h2>Todos los articulos con el precio modificado es: </h2>";
    echo "<table>";
    echo "<tr><th>Articulo</th><th>Precio(€)</th></tr>";
    foreach($precio_art as $n){
        echo "<tr><td>".$n[0]."</td> <td>".$n[1]."</td></tr>";
    }
    echo "</table>";

    echo "</table>";
    ?>
</body>
</html>
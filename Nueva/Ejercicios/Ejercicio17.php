<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 17 - Funciones</h1>
    
    <?php 
    $articulos = [
        ["Teclado", 58],
        ["Raton", 32],
        ["Impresora", 185],
        ["Altavoz", 62],
        ["Auriculares", 36],
        ["Monitor", 102],
        ["Webcam", 47]
    ];

    //Funcion que añade nuevo articulos al array introduciendo por parametros el array al cual se le va introducir el articulo, el nombre y el precio
    function añadirArticulo(&$array, $nombre, $precio) {
        $array[] = [$nombre, $precio];
        return $array;
        unset($array);
    }

    //Funcion que muestra todos los elementos del array introducido por parametros
    function listarArray($array) {
        foreach($array as $n) {
            echo $n[0] . " " . $n[1] . "<br>";
        }
    }
    //Funcion que elimina articulos del array pasado por parametros poniendo el nombre del articulo
    function eliminarArticulo(&$array, $nombre) {
        foreach($array as $key => $n) {
            if($n[0] == $nombre) {
                unset($array[$key]);
            }
        }
        return $array;
        unset($array);
    }

    //Funcion que calcula el promedio de los articulos del array
    function calcularPromedio($array) {
        $total = 0;
        $cantidad = 0;
    
        foreach ($array as $n) {
            $total += $n[1]; 
            $cantidad++;
        }
    
        return $total / $cantidad;
    }

    // Listar artículos iniciales
    listarArray($articulos);
    echo "<br><br>";

    // Añadir un nuevo artículo
    añadirArticulo($articulos, "Pantalla", 60);
    listarArray($articulos);
    echo "<br><br>";

    // Eliminar un artículo
    eliminarArticulo($articulos, "Pantalla");
    listarArray($articulos);
    echo "<br><br>";

    //Calcular y mostrar el promedio
    //$promedio = calcularPromedio($articulos);
    //echo "Promedio: " . $promedio;
    echo "Promedio: " . calcularPromedio($articulos);
    ?>




</body>
</html>
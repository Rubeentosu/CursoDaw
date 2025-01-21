<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 15 - Funciones</h1>
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
    
    function imprimirArray($array,$posicion){
        if ($posicion >= 0 && $posicion < count($array)) {
            foreach ($array[$posicion] as $n) {
                echo $n . "<br>";
            }
        } else {
            echo "Posición del array no válida";
        }
    }
    imprimirArray($articulos,6);
?>


</body>
</html>
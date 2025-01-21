<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones</title>
</head>
<body>
    <h1>Ejercicio 14 - Arrays</h1>
    <?php 
    // function nombre(){
    //     instraucciones
    // }
    echo potencia(5,3);
    echo potencia(5);
    function potencia($base,$exponente=2){

        $resultado = $base**$exponente;
        return $resultado;
    }
    function potencia1($base,$exponente=2){
        return $base**$exponente;
    }
    ?>
</body>
</html>
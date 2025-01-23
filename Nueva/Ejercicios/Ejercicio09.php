<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>
<body>
    <h1>Ejercicio 09 - Arrays</h1>
    <?php 
    //array de nº aleatorios entre (1,40)(tamaño 20)
    //Mostrar los array que son divisibles entre 4
    //mostrar el array con los numeros divisibles entre 4 sean multiplicados por 2

    for($i = 1; $i <=20;$i++){
        $arrayAleatorio[] = rand(1,40);
    }

    echo "El array es: ";
    print_r($arrayAleatorio);

    echo "<br>Los divisibles por 4 son:";
    foreach($arrayAleatorio as $n){
        if($n % 4 == 0){
            echo $n.", ";
        }
    }

    echo "<br>Los divisibles multiplicados por 2 son: ";
    foreach($arrayAleatorio as $n){
        if($n % 4 == 0){
            $n = $n*2;
            echo $n.", "; 
        }else echo $n.", ";
    }
    ?>
</body>
</html>
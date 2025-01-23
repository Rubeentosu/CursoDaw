<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio09</title>
</head>

<body>
    <h1>Arrays</h1>
    <?php
    $array1 = ["perro","gato", "musaraña", "cocodrilo","loro","periquito"];
    //list solo para indexados
    list($var1,$var2, , ,$var3) = $array1;
    echo $var3;

    echo "<br><br>";

    //guardar un rango
    //range(valorInicial,valorFinal,[paso]);
    $array2 = range(10,50,2);
    var_export($array2);

    echo "<br><br>";
    
    //Busca si existe en un array
    //in_array(valorBuscado,nombreArray);
    echo json_encode(in_array("periquito",$array1));
    
    echo "<br><br>";

    //elimina uno o varios elementos del array
    //unset(nombreArray,[],[]...);
    unset($array1 [5]);
    var_export($array1);

    echo "<br><br>";

    $array1[]="periquito";
    var_export($array1);

    echo "<br><br>";

    for($i=0;$i <count($array1);$i++){
        echo $array1[$i]."<br>";
    }

    echo "<br><br>";

    //Con foreach no sale warning
    // foreach($array1 as $n){
    //     echo $n."<br>";
    // }

    echo "<br><br>";

    $array1[5]="periquitoNuevo";
    var_export($array1);

    echo "<br><br>";

    for($i=0;$i <count($array1);$i++){
        echo $array1[$i]."<br>";
    }

    echo "<br><br>";

    //mezcla los datos de un array
    shuffle($array1);
    var_export($array1);

    //array_push($nombreArray,valor1,valor3,...); -->METER ELEMENTO AL FINAL DE UN ARRAY

    //extrae el ultimo elemento del array pero tambien hace reset a los indices
    //array_pop($nombreArray);
    //Asi lo alamacena en una variable 
    //$var = array_pop($nombreArray);

    //$arrayDestino = array_merge($array1,$array2) -->unir uno o mas array

    //array_shift($nombreArray,$valor1,$valor2) --> extrae en la primera posicon del array

    //array_unshift($nombreArray,$valor1,$valor2) --> añade en la primera posicon del array

    //coger una rango del array los [opcional] pero sin poner `[]`
    //array_slice($nombreArray,indice inicial,[longitud],[preserve_keys])
    ///asi se le asigna a una variable
    //$ porcion = array_slice($nombreArray,indice inicial,[longitud o cantidad],[preserve_keys `es boleano`])

    //array_reverse($nombreArray)

    //array_unique($nombreArray) --> elimina los elemntos duplicados
    echo "<br><br>";
    $num=["4",1,2,3,4,5,1,2,3,4];
    var_export($num);
    $num2 = array_unique($num);
    echo "<br>";
    var_export($num2);
    echo "<br><br>";

    //devuelve el indice del array
    //array_search(valorBuscado,$nombreArray)

    //para array asociativos
    //array_keys($nombreArray) --> devuelve un arrau con los indices
    //array_values($nombreArray) --> devuelve un array con los elementos del array (ejemplo para cambiarlo a indexado)
    ?>

</body>
</html>
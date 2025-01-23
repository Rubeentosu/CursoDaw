<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    echo "Buenas tardes";
    echo "<br>";
    function ambito(){
        $num=10;
        echo $num;
    }
    ambito();

    echo "<br>";
    $num2=10;
    $num3=30;
    function ambito2(){
        
        global $num2, $num3;
        $num4 = $num2 + $num3;
        echo "El resultado es ".$num4;
    }
    ambito2();
    
    echo "<br>";
    echo "El nombre del server es ".$_SERVER['SERVER_NAME']; 
    echo "<br>";
    echo "El nombre del server es ".$_SERVER['SERVER_SOFTWARE'];

    echo "<br>";

    define("CONSTANTE", 3.14);
    echo CONSTANTE;

    echo "<br>";
    define("AULA","2DAW");
    echo "Estoy en ".AULA;

    echo "<br>";
    echo PHP_VERSION;

    //MOSTRAR BOOLEANO
    echo "<br>";
    $_bool= FALSE;
    echo "Sacar un booleano ".JSON_ENCODE($_bool);
    
    
    ?>
</body>
</html>
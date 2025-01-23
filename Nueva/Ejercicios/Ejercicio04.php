<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nota= -1;
    if($nota >= 5 && $nota <=6){
        echo "Aprobado";
    }elseif($nota >= 7 && $nota <=8){
        echo "Notable";
    }elseif($nota >=9 && $nota <= 10){
        echo "Sobresaliente";
    }elseif($nota >= 0 && $nota < 5) 
        echo "Suspenso";
    else echo "Nota no valida";
    echo"<br><br>";

    switch($nota){
        case ($nota >= 5 && $nota <=6); 
        echo "Aprobado";
        break;
        case ($nota >= 7 && $nota <=8);
        echo "Notable";
        break;
        case ($nota >=9 && $nota <= 10);
        echo "Sobresaliente";
        break;
        case ($nota >= 0 && $nota < 5);
        echo "Suspenso";
        default: echo "Nota no valida";
    }

    ?>
</body>
</html>
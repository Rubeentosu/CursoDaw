<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    for($i = 0;$i<=10;$i++){
        echo "7 x ".$i." =".(7*$i)."<br>";
    }
    echo "<br>";
    
    for($i = 10;$i>=-10;$i--){
        if($i == 0){
            echo "No se divide nunca entre 0<br>";
            continue;
        }
        echo "7 / ".$i." =".(7/$i)."<br>";
    }
    ?>
</body>
</html>
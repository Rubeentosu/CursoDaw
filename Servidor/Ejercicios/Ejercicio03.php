<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 03</title>
</head>
<body>
    <?php
   $numHoras = 39; // Número de horas trabajadas
   if ($numHoras <= 37) {
       // Salario para horas hasta 37
       $salario = $numHoras * 8.6;
       echo "<br>Salario semanal: " . $salario;
       echo "<br>Número de horas extras: 0";
   } elseif ($numHoras <= 40) {

       // Calculo las horas extras si se trabaja entre 37 y 40
       $numExtras = $numHoras - 37;
       $numhoras = $numHoras;
   
       echo "<br>Número de horas semanales: " . $numhoras;
       echo "<br>Número de horas extras: " . $numExtras;
   
       // Salario normal (hasta 40 horas)
       $salario = $numhoras * 8.6;
   
       // Salario por horas extras (30% más)
       $salarioExtras = $numExtras * (8.6 * 0.3);
       
       // Salario total
       $salarioTotal = $salario + $salarioExtras;
       echo "<br>Salario semanal: " . $salario;
       echo "<br>Salario total: " . $salarioTotal;
   } else {
       // Si se trabaja más de 40 horas, solo se pagan hasta 40
       $numExtras = 3; // Solo se pagan 3 horas extras
       $numhoras = 40; // Solo se pagan 40 horas
   
       echo "<br>Número de horas semanales: " . $numhoras;
   
       // Salario normal (40 horas)
       $salario = (40 * 8.6);
   
       // Salario por horas extras (30% más)
       $salarioExtras = $numExtras * (8.6 * 0.3);
       
       // Salario total
       $salarioTotal = $salario + $salarioExtras;
       echo "<br>Salario semanal: " . $salario;
       echo "<br>Salario total: " . $salarioTotal;

       //Numero total de horas extras
       $numExtras = $numHoras - 37;
       echo "<br>Número de horas extras: " . $numExtras;
   }
   ?>
</body>
</html>
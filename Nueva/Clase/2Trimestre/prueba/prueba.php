<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <form action="prueba.php" method="post">
        <label for="nombreP">Nombre Provincia</label>
        <input type="text" name="provincia" id="nombreP" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["provincia"]) && !empty($_POST["provincia"])) {
            $host = "localhost";
            $user = "root";
            $pass = "";
            $name_db = "Campeonatos";

            // Conexión a la base de datos
            $conexion = mysqli_connect($host, $user, $pass, $name_db);

            $query = "SELECT NombreCiudad, Provincia, NumHab FROM CIUDADES WHERE Provincia = '$provincia'";
            $resultado = mysqli_query($conexion, $query);

            if (mysqli_num_rows($resultado) > 0) {
                echo "<table>";
                echo "<tr><th>Nombre Ciudad</th><th>Provincia</th><th>Número de Habitantes</th></tr>";
                while ($registro = mysqli_fetch_assoc($resultado)) {
                    echo "<tr>";
                    echo "<td>" . $registro["NombreCiudad"] . "</td>";
                    echo "<td>" . $registro["Provincia"] . "</td>";
                    echo "<td>" . $registro["NumHab"] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "No se encontraron ciudades para esa provincia.";
            }

            // Cerrar conexión
            mysqli_close($conexion);
        } else {
            echo "Faltan datos.";
        }
    }
    ?>
</body>
</html>

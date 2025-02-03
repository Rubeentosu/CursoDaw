<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <form action="Ej_ConsultaCiudades.php" method="post">
        <label for="nombreP">Nombre Provincia</label>
        <input type="text" name="provincia" id="nombreP" required>
        <button type="submit">Enviar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["provincia"])) {
            $host = "localhost";
            $user = "root";
            $pass = "";
            $name_db = "Campeonatos";

            // Conexión a la base de datos
            $conexion = mysqli_connect($host, $user, $pass, $name_db);
            $prov = $_POST["provincia"];

            $query = "SELECT * FROM CIUDADES WHERE provincia = '$prov'";
            $resultado = mysqli_query($conexion, $query);

            if (mysqli_num_rows($resultado) > 0) {
                echo "<table>";
                echo "<tr><th>Nombre Ciudad</th><th>Provincia</th><th>Número de Habitantes</th></tr>";
                while ($registro = mysqli_fetch_assoc($resultado)) {
                    echo "<tr>";
                    echo "<td>" . $registro["nombreCiudad"] . "</td>";
                    echo "<td>" . $registro["provincia"] . "</td>";
                    echo "<td>" . $registro["numHab"] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "No se encontraron ciudades para esa provincia.";
            }

        } else {
            echo "Faltan datos.";
        }
    }
    ?>
</body>
</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <h1>Formulario de Contacto</h1>
        <form action="index.php" method="POST">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="asunto">Asunto:</label>
            <input type="asunto" id="asunto" name="asunto" required><br>

            <label for="mensaje">Mensaje:</label><br>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br>

            <button type="submit">Enviar</button>
        </form>

        <?php
            
                require 'PHPMailer/src/Exception.php';
                require 'PHPMailer/src/PHPMailer.php';
                require 'PHPMailer/src/SMTP.php';

                use PHPMailer\PHPMailer\PHPMailer;
                use PHPMailer\PHPMailer\Exception;

                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Captura los datos del formulario
                $nombre = htmlspecialchars($_POST['nombre']);
                $email = htmlspecialchars($_POST['email']);
                $mensaje = htmlspecialchars($_POST['mensaje']);
                $asunto = htmlspecialchars($_POST['asunto']);

                // Crear una instancia de PHPMailer
                $mail = new PHPMailer(true);

                try {
                    // Configuración del servidor SMTP
                    $mail->isSMTP();  
                    $mail->Host       = 'smtp.gmail.com';  
                    $mail->SMTPAuth   = true;  
                    $mail->Username   = 'rtorsua@g.educaand.es';  
                    $mail->Password   = 'zeyd bhbs clab xqwu';  
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  
                    $mail->Port       = 465;

                    // Destinatarios
                    $mail->setFrom('rtorsua@g.educaand.es', 'Mailer');
                    $mail->addAddress($email);  // Añadir destinatario

                    // Contenido del correo
                    $mail->isHTML(true);
                    $mail->Subject = 'Asunto: ' . $asunto;
                    $mail->Body    = 'Nombre: ' . $nombre . '<br>Email: ' . $email . '<br>Mensaje: ' . $mensaje;
                    $mail->AltBody = 'Nombre: ' . $nombre . '\nEmail: ' . $email . '\nMensaje: ' . $mensaje;

                    // Enviar el correo
                    $mail->send();
                    echo '<p>El mensaje ha sido enviado correctamente.</p>';
                } catch (Exception $e) {
                    echo "<p class='error'>No se pudo enviar el mensaje. Error de Mailer: {$mail->ErrorInfo}</p>";
                }
            }
        ?>
    </div>
</body>
</html>
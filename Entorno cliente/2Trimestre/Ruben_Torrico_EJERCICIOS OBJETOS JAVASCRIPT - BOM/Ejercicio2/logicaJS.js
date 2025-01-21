function verEnunciado() {
    let enunciado = `<u>Ejercicio 2.</u> 
    <p>
        OBJETO SCREEN. Modifica el ejercicio anterior para que la nueva ventana incluya un botón <Maximizar>. 
        Al clicar sobre este, la ventana se agrandará para ocupar toda la pantalla del dispositivo (Haz uso de las propiedades y métodos del objeto screen).
        Cuando la ventana está maximizada, el botón <Maximizar> es reemplazado por el botón <Minimizar>, cuya funcionalidad es la de redimensionar la ventana y centrarla
        en pantalla dejando 50 píxeles arriba, abajo, izquierda y derecha.
    </p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function abrirVentana() {
    let ventana = window.open("", "nuevaVentana", "width=800, height=600");
    ventana.document.write(`
        <html>
        <body>
            <button id="boton" onclick="maximizar()">Maximizar</button>
            <script>
                function maximizar() {
                    window.resizeTo(screen.availWidth, screen.availHeight);
                    document.getElementById("boton").innerText = 'Minimizar';
                    document.getElementById("boton").onclick = minimizar;
                }

                function minimizar() {

                    window.resizeTo(screen.availWidth-100, screen.availHeight-100);
                    window.moveTo(50,50,);
                    document.getElementById("boton").innerText = 'Maximizar';
                    document.getElementById("boton").onclick = maximizar;
                }
            </script>
        </body>
        </html>`);
}

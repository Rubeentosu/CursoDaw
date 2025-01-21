function verEnunciado() {
    let enunciado = `<u>Ejercicio 5.</u> 
    <p> OBJETO DOCUMENT. El DOM permite a los desarrolladores ver una página HTML de otra manera, como un conjunto de objetos que JavaScript puede consultar y modificar. <br>
Los principales métodos para recuperar elementos de un documento HTML son: getElementById, getElementsByTagName, getElementsByClassName, querySelector/querySelectorAll.<br>
Las principales propiedades para cambiar el contenido de elementos HTML son: innerHTML (utilizado hasta ahora en la plantilla de entrega de actividades) y textContent.<br>
Los principales métodos para añadir y eliminar elementos HTML son: createElement y remove.<br>
Puedes consultar el resto de métodos en https://www.w3schools.com/jsref/dom_obj_document.asp o https://developer.mozilla.org/es/docs/Web/API/Document.<br>
Por su importancia el DOM se estudiará en detalle en el RA6, a modo de primer contacto realiza:<br>
Crea un nuevo documento HTML con una imagen, un formulario con dos campos para introducir tu nombre y apellidos y 4 párrafos.<br>
El contenido de los párrafos será “Párrafo N” donde N hace referencia al número de párrafo.<br>
Puedes obtener la imagen de flaticon.com.<br>
Recupera el segundo párrafo utilizando los 4 métodos y muéstralo por consola seguido del texto “obtenido mediante METODO” donde METODO hace referencia al método utilizado para la obtención de contenido.<br>
Implementa un botón <Modificar segundo y tercer párrafo> para cambiar el contenido del segundo párrafo por “Éste es el nuevo contenido del segundo párrafo” y el contenido del tercero por “Éste es el nuevo contenido del <strong>tercer párrafo</strong>” cuando se clique en él.<br>
Implementa un botón <Eliminar cuarto párrafo> para eliminar el cuarto párrafo cuando se clique en él.<br>
Implementa un botón <Crear párrafos> cuya función es la creación de un nuevo párrafo “Nuevo párrafo creado mediante botón” ubicado en último lugar. Adicionalmente, se creará un nuevo párrafo “La diferencia entre innerHTML y textContent es RESPUESTA” donde RESPUESTA debe ser la completación a esa sentencia (y que sea verdadera ;) ). Dicho párrafo estará ubicado en tercer lugar.<br>
Implementa un botón <Modificar imagen> que sustituya la imagen existente por otra diferente a tu elección cuando se clique en él.<br>
Implementa un botón <Modificar formulario> que sustituya el texto “Nombre” referente al campo nombre del formulario por “Año de nacimiento” cuando se clique en él.<br>
Implementa un botón <Método write> que escriba “Esto es lo que pasa por usar el método document.write una vez la página se ha cargado” cuando se clique en él.</p>`;
    document.getElementById("enunciadoAE").innerHTML = enunciado;
}

function abrirVentana(){
    window.open("pagina1.html", "Nueva Ventana", "width=1280,height=720");
}
 // Recuperar el segundo párrafo con los cuatro métodos
function recuperarSegundoParrafo() {
    let segundoParrafo = document.getElementById("p2");
    console.log(segundoParrafo.textContent + " obtenido mediante getElementById");

    let porEtiqueta = document.getElementsByTagName("p")[1];
    console.log(porEtiqueta.textContent + " obtenido mediante getElementsByTagName");

    let porClass = document.getElementsByClassName("pa2")[0];
    console.log(porClass.textContent + " obtenido mediante getElementsByClassName");

    let querySimple = document.querySelector("#p2");
    console.log(querySimple.textContent + " obtenido mediante querySelector");
}

// Modificar segundo y tercer párrafo
function modificarParrafos() {
    let segundo = document.getElementById("p2");
    let tercero = document.getElementById("p3");

    segundo.textContent = "Éste es el nuevo contenido del segundo párrafo";
    tercero.innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>";
}

// Eliminar cuarto párrafo
function eliminarCuartoParrafo() {
    let eliminar = document.getElementById("p4");
    if (eliminar) eliminar.remove();
}

// Crear nuevos párrafos
function crearParrafos() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo creado mediante botón";
    document.body.appendChild(nuevoParrafo);

    let explicacionParrafo = document.createElement("p");
    explicacionParrafo.textContent ="La diferencia entre innerHTML y textContent es que innerHTML permite insertar etiquetas HTML mientras que textContent solo inserta texto plano.";
    let lugarTercerParrafo = document.getElementById("p3");
    lugarTercerParrafo.insertAdjacentElement("beforebegin", explicacionParrafo);
}

// Modificar imagen
function modificarImagen() {
    let imagen = document.getElementById("imagen");
    imagen.src = "leon.png";
    imagen.alt = "Nueva imagen";
}

// Modificar formulario
function modificarFormulario() {
    let labelNombre = document.querySelector("label[for='nombre']");
    labelNombre.textContent = "Año de nacimiento:";
    
}

// Usar document.write
function usarDocumentWrite() {
    document.write("Esto es lo que pasa por usar el método document.write una vez la página se ha cargado");
}

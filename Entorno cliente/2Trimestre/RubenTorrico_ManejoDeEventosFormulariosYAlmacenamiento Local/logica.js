
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const fields = [
        { id: 'nombre', errorId: 'nombreError', errorMessage: 'Nombre no válido. Debe comenzar con una letra mayúscula y tener entre 4 y 10 caracteres.' },
        { id: 'primerApellido', errorId: 'primerApellidoError', errorMessage: 'Primer apellido no válido. Debe comenzar con una letra mayúscula y tener entre 5 y 8 caracteres.' },
        { id: 'segundoApellido', errorId: 'segundoApellidoError', errorMessage: 'Segundo apellido no válido. Debe comenzar con una letra mayúscula y tener entre 5 y 8 caracteres.' },
        { id: 'telefono', errorId: 'telefonoError', errorMessage: 'Teléfono no válido. Debe seguir el formato +XX XXX-XXX-XXX.' },
        { id: 'email', errorId: 'emailError', errorMessage: 'Email no válido. Debe seguir el formato nombre@dominio.com.' },
        { id: 'direccion', errorId: 'direccionError', errorMessage: 'Dirección no válida.' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        if (!input.checkValidity()) {
            errorElement.textContent = field.errorMessage;
            isValid = false;
        } else {
            errorElement.textContent = '';
        }
    });

    if (isValid) {
        alert('Formulario enviado correctamente');
        //Aqui puedes poner el codigo para enviar el formulario
    }
});
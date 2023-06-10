//seleccionar elementos que deseo manipular del dom (dom es todos los elementos html document objet model)
var form = document.getElementById("formulario1");
var campos = document.querySelectorAll('input');


const validarFormulario = (event) => {

    const regex = /^[A-Za-z\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //valorInput es el valor del input en el que estamos escribiendo o tambien llamado "target"(interactuando).
    var valorInput = event.target.value;

    //Metodo que retorna un true o false, dependiendo del valor del "target".
    const isValid = regex.test(valorInput);
    var error = document.getElementById(`error-${event.target.name}`);

    /*
    En JavaScript, una alternativa interesante al uso de switch es utilizar objetos literales (también conocidos como diccionarios o mapas) 
    para mapear opciones a valores o funciones específicas. Esto puede mejorar la legibilidad y la estructura de tu código.
    */
    const validaCampos = {
        'nombre': () => {

            if (isValid || valorInput.length == 0) {
                error.className = "no-visible";
                event.target.className = '';
            } else {
                error.className = "visible";
                error.textContent = 'Nombre no valido.';
                event.target.className = 'nombre-error';
            }
        },
        'apellido': () => {
            if (isValid || event.target.value.length == 0) {
                error.className = "no-visible";
                event.target.className = '';
            } else {
                error.className = "visible";
                error.textContent = 'Apellido no valido.';
                event.target.className = 'nombre-error';
            }
        },
        'email': () => {
            const isValidEmail = regexEmail.test(valorInput);
            if (isValidEmail || valorInput.length == 0) {
                error.className = "no-visible";
                event.target.className = ''
            } else {
                error.className = "visible";
                error.textContent = 'Email no valido.';
                event.target.className = 'nombre-error';

            }
        },
        'password': () => {
            if (valorInput.length >= 6) {
                error.className = "no-visible";
                event.target.className = '';
            } else {
                error.className = "visible";
                error.textContent = 'Contraseña debe tener almenos 6 caracteres.'
                event.target.className = 'nombre-error';
            }
        }
    }

    if (event.target.name in validaCampos) {
        validaCampos[event.target.name](); // Ejecutar la función correspondiente a la propiedad (nombre, apellido, email, password);
    }
}

campos.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    campos.forEach((item) => {

        if (item.value.length === 0) {
            var error = document.getElementById(`error-${item.name}`);
            error.textContent = `El campo ${item.name} no puede estar vacío`;
            error.className = "visible";
            item.className = 'nombre-error';
        }
    });
    console.log("formulario enviado");
});

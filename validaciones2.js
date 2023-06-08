//seleccionar elementos que deseo manipular del dom (dom es todos los elementos html document objet model)
var form = document.getElementById("formulario1");
var campos = document.querySelectorAll('input');
var errorNombre = document.getElementById('error-nombre');
var errorApellido = document.getElementById('error-apellido');
var errorEmail = document.getElementById('error-email');
var errorContraseña = document.getElementById('error-contraseña');

const expresiones = {
    // nombre: /^[a-zA-ZÄ-ÿ\s]{1.40}$/,
    nombre: /^[A-Za-z\s]+$/,
    apellido: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\[a-zA-Z0-9-.]+$/,
    contraseña: /^\.{4,12}$/,
};

form.addEventListener("click", (event) => {
    var errors = Array.from(document.getElementsByClassName('active-error'));
    // console.log(event.target.name);
    if (errors.length > 0) {

        errors.forEach(error => {
            if (error.id === event.target.name) {
                error.remove();
                event.target.classList.remove('nombre-error');
            }
        })
        console.log(errors);
    }


});

const validarFormulario = (event) => {
    var regex = /^[a-zA-Z]+$/i;


    switch (event.target.name) {

        case "nombre":
            if (regex.test(event.target.value)) {
                errorNombre.classList.remove('visible');
                errorNombre.classList.add('no-visible');
            } else {
                errorNombre.classList.add('visible');
                errorNombre.classList.remove('no-visible');

            }


            break;
        case "apellido":
            if (regex.test(event.target.value)) {
                errorApellido.classList.remove('visible');
                errorApellido.classList.add('no-visible');
            } else {
                errorApellido.classList.add('visible');
                errorApellido.classList.remove('no-visible');

            }

            break;
        case "email":

            break;
        case "password":

            break;
    }
}

campos.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    limpiarErrores();

    campos.forEach((item) => {

        // console.log(item.value);

        if (item.value.length === 0) {
            var error = document.createElement('p');
            error.classList = 'active-error';
            error.id = item.name;
            error.textContent = `el campo ${item.name} no puede estar vacio`;
            item.classList.add('nombre-error');
            item.insertAdjacentElement("afterend", error);


        }

    });






    console.log("formulario enviado");
});



const limpiarErrores = () => {
    var errors = Array.from(document.getElementsByClassName('active-error'));
    // console.log(event.target.name);
    if (errors.length > 0) {

        errors.forEach(error => {
            error.remove();

        })
        console.log(errors);
    }

}



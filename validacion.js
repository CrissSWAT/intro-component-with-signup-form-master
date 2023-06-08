const formulario = document.getElementById('formulario1');
const input = document.querySelectorAll('#formulario1');
const enviar = document.getElementById('btn-enviar');

const expresiones = {
    // nombre: /^[a-zA-ZÄ-ÿ\s]{1.40}$/,
    nombre: /^[A-Za-z\s]+$/,
    apellido: /^[a-zA-ZÄ-ÿ\s]{1.40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\[a-zA-Z0-9-.]+$/,
    contraseña: /^\.{4,12}$/,
}
const enviarFormulario = (e) =>{

    e.preventDefault();
    console.log('ok');
}

const validarFormulario = (e) =>{
    console.log(e.target.value);
    let nombre = e.target.value;
    console.log(nombre.length);



    switch(e.target.name){
        case "nombre":
             if (!expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre_error').classList.add('active-error')
                return document.getElementById('nombre').classList.add('nombre-error')

             }
             document.getElementById('nombre').classList.remove('nombre-error')
             document.getElementById('nombre_error').classList.remove('active-error')
             
             if(nombre.length < 3){

                document.getElementById('nombre_error').classList.add('active-error')
                return document.getElementById('nombre').classList.add('nombre-error')
             }
        
        break;
        case "apellido":
        
        break;
        case "email":

        break;
        case "password":

        break;
    }
}

input.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});


formulario.addEventListener('submit', () =>{
    e.preventDefault();
});
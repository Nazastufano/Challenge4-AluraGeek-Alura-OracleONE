export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.classList.remove("formcontato__input-incorrecto");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        document.querySelector(".form__boton").disabled = false;
    }else{
        input.classList.add("formcontato__input-incorrecto");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        document.querySelector(".form__boton").disabled = true;
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajeDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío.",
    },
    email:{
        valueMissing: "El campo correo no puede estar vacío.",
        typeMismatch: "El correo no es válido.",
        patternMismatch: "El correo no es válido.",
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacío.",
    },
    texto:{
        valueMissing: "Debe ingresar algún mensaje.",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
          "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
      },
}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje
}
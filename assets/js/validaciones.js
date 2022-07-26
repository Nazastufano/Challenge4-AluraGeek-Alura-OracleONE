export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }    

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
    "customError",
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
    nombreProducto:{
        valueMissing: "Debe ingresar el nombre del producto",
    },
    img: {
        valueMissing: "Debe ingresar una imagen",
    },
    lista: {
        valueMissing: "Debe seleccionar una categoría",
        customError: "Debe seleccionar una categoría",
    },
    numero: {
        valueMissing: "Debe ingresar el precio del producto",
        patternMismatch: "El precio ingresado no es válido",
    },
    descripcion: {
        valueMissing: "Debe ingresar una descripción",
    },

}

const validadores = {
    lista: (input) => validarLista(input),
};

export const validarLista = (input) => {
    let mensaje = "";
    if (input.value == 0){
        mensaje = "Debes seleccionar una categoría";
    }
    input.setCustomValidity(mensaje);
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
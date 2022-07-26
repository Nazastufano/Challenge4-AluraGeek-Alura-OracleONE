import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const textarea = document.querySelector("textarea");
validarTextarea(textarea);

function validarTextarea(textarea){
    textarea.addEventListener("blur", (textarea) => {
        valida(textarea.target);
    });
}

const select = document.querySelector("select");
validarSelect(select);

function validarSelect(select){
    select.addEventListener("blur", (select) => {
        valida(select.target);
    });
};
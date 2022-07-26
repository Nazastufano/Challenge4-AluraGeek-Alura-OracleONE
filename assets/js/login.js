const logo = document.querySelector("#menuPrincipalLogin");

logo.addEventListener("click", () => {
    window.location.replace("../../index.html");
});

const usuario = {
    mail: "administrador@admin.com",
    contraseña: "Admin1"
}

const botonIniciar = document.querySelector(".formulario__boton");    
botonIniciar.addEventListener("click", (event) => {
    event.preventDefault(); 
    const error = document.querySelector(".error");
    error.innerHTML = "";
    const mail = document.querySelector("#formEmail").value;
    const contraseña = document.querySelector("#formPassword").value;  

    if(mail == usuario.mail && contraseña == usuario.contraseña){
        window.location.replace("././menu-admin.html");
    } else if(mail != "" && contraseña != ""){
        error.innerHTML = "El mail y/o la contraseña ingresados no son válidos";
    }
});

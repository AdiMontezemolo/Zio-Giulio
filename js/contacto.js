function validateForm() {
    let telefono = document.forms["formulario_reservas"]["telefono"].value;
    telefono = telefono.split(" ").join("").split("-").join(""); // Borramos los espacios y los guiones

    if (! /^\d+$/.test(telefono)) { // Verificamos que solo tenga caracteres numericos
        alert("El telefono solo puede contener caracteres numericos");
        return false;
    }
    if (telefono.length != 10) {
        alert("El telefono solo puede contener 10 digitos");
        return false;
    }

    let email= document.forms["formulario_reservas"]["email"].value;
    let numero_de_arrobas = email.split("@").length-1;
    if (numero_de_arrobas != 1) {
        document.forms["formulario_delivery"]["email"].innerHTML = "email inválido";
        alert("email inválido");
        return false;
    } 

    return true;
}

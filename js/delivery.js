function validateForm() {
    let email= document.forms["formulario_delivery"]["email"].value;
    let numero_de_arrobas = email.split("@").length-1;
    if (numero_de_arrobas != 1) {
        document.forms["formulario_delivery"]["email"].innerHTML = "email inválido";
        alert("email inválido");
        return false;
    }
    return true; 
}
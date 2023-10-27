function validateForm() {
    let telefonoImput= document.getElementById ("telefono");
    let length=10;

    if (length != 10) {
        document.forms["formulario_reservas"]["telefono"].innerHTML = "telefono inválido";
        alert("telefono invalido");
        return false;
    }
    return true;

    
    let emailImput= document.forms["formulario_reservas"]["email"].value;
    let numero_de_arrobas = email.split("@").length-1;
    if (numero_de_arrobas != 1) {
        document.forms["formulario_reservas"]["email"].innerHTML = "email inválido";
        alert("email inválido");
        return false;
    }
    return true; 

    let invitadosImput= document.getElementById ("invitados");
    let invitadosValue= invitadosImput.value;

    let minInvitados=2;
    let maxInvitados=20;

    if (invitadosValue < invitadosImput){
        alert ("El minimo de personas tiene que ser" + minInvitados+".");
        return false;
    }
    return true;

    let reservaImput=docum.getElementById("reserva")
    let fechaReserva= new Date(reservaImput.value);
    let fechaActual = new Date();

    if (fechaReserva <= fechaActual) {
        alert ("La fecha no es correcta");
        return false;
    }
    return true;





}

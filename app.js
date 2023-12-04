var edad = prompt("Por favor, ingrese su edad:");

if (edad >= 18) {
    var nombre = prompt("Ingrese su nombre:");
    var apellido = prompt("Ingrese su apellido:");

    var saludo = "¡Hola " + nombre + " " + apellido + "!";
    document.body.innerHTML = "<h1>" + saludo + "</h1>";
} else {
    document.body.innerHTML = "<p>Lo siento, debes ser mayor de edad para continuar.</p>";
}


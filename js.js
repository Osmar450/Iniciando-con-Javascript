function calcularPromedio() {
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);

    if (!isNaN(calificacion1) && !isNaN(calificacion2) && !isNaN(calificacion3)) {
        var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

        if (promedio > 8) {
            document.getElementById("resultado").innerHTML = "<p>¡Felicidades, lo lograste!</p>";
        } else {
            document.getElementById("resultado").innerHTML = "<p>¡Lo siento, tienes ordinario!</p>";
        }
    } else {
        document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa calificaciones válidas.</p>";
    }
}

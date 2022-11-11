

function ejercicioUno(doble) {
       var doble = prompt("Dime el número a doblar", 0);
    if (doble == 0) {
        alert("No has introducido ningún número");

    }
    if (doble > 0 ) {
        const dobleFin = doble *2;
        alert ("El doble de tu número es: " + (dobleFin));
    }

    }

function ejercicioDos (cuadrado) {
    var cuadrado = prompt("Dime un número")
    if (cuadrado == 0 | null) {
        alert("No has introducido ningún número");
    }
    if (cuadrado > 0 ) {
        const cuadradoFin = cuadrado * cuadrado;
        alert ("El cuadrado de tu número es: " + (cuadradoFin));
    }
}

function ejercicioTres () { 
    //alert("No has introducido ningún ancho");
    const ancho=document.getElementById("ancho").value;
    const alto=document.getElementById("alto").value;

    if (ancho == 0) {
        alert("No has introducido ningún ancho");
        return console.log(parseInt("ancho"))
    }
    else if (alto==0) {
        alert("No has introducido ningún alto")
        return console.log(parseInt("alto"))
    }
    else {
        const perimetro = ancho * alto;
        document.getElementById("resultado").innerHTML = "El perímetro del rectángulo es: " + perimetro;
    }
}
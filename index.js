

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

function ejercicioCuatro(comprobarPar) {
    var comprobarPar = prompt("Dime el número a comprobar", 0);
 if (comprobarPar == 0) {
     alert("No has introducido ningún número");

 }
 if (comprobarPar > 0 ) {
    if (comprobarPar%2==0) {
        alert ("El número es par")
    }
    else {
        alert ("El número es impar");
    }
 }
 }

 function ejercicioCincoUno(){
    
    let personas = [
        { nombre: 'Juan', edad: 18 },
        { nombre: 'María', edad: 16 },
        { nombre: 'Pedro', edad: 20 },
        { nombre: 'Pablo', edad: 15 },
        { nombre: 'Laura', edad: 19 },
      ];

    let mayores = [];
    
    for (let i = 0; i<personas.length; i++) {
       //console.log(personas[i].edad)
        var currentNumber = personas[i].edad;
        if (currentNumber > 17) {
          mayores.push(personas[i].nombre)
          
        }
    };
    console.log("Los siguientes nombres son mayores de edad: " + mayores);
 }

 function ejercicioCincoDos(){
    
    let personas = [
        { nombre: 'Juan', edad: 18 },
        { nombre: 'María', edad: 16 },
        { nombre: 'Pedro', edad: 20 },
        { nombre: 'Pablo', edad: 15 },
        { nombre: 'Laura', edad: 19 },
      ];
    
    let edadMayor= 0;
    let elMayor = "";
    
    for (let i = 0; i<personas.length; i++) {
        var currentNumber = personas[i].edad;
        if (currentNumber > edadMayor) {
          edadMayor = currentNumber;  
          elMayor= (personas[i].nombre);
          
        }
    };
    console.log("El más mayor de todos es: " + elMayor);
 }

 function ejercicioCincoTres(){
    
    let personas = [
        { nombre: 'Juan', edad: 18 },
        { nombre: 'María', edad: 16 },
        { nombre: 'Pedro', edad: 20 },
        { nombre: 'Pablo', edad: 15 },
        { nombre: 'Laura', edad: 19 },
      ];
    
    let edadJoven= 1000;
    let elJoven = "";
    
    for (let i = 0; i<personas.length; i++) {
        var currentNumber = personas[i].edad;
        if (currentNumber < edadJoven) {
            edadJoven = currentNumber;  
            elJoven= (personas[i].nombre);
          
        }
    };
    console.log("El más joven de todos es: " + elJoven);
 }
 
 function ejercicioSeisUno(){
    const pokemons = [
        {nombre:'Garchomp', tipoDePokemon:'Tierra' },
        {nombre:'Kyogre', tipoDePokemon:'Agua'},
        {nombre:'Charmander', tipoDePokemon:'Fuego'},
        {nombre:'Arbok', tipoDePokemon:'Fuego'},
    ];

    let listaPokemons = [];

     for (let i = 0; i < pokemons.length; i++) {
        listaPokemons.push(pokemons[i].nombre)

         }
     console.log(listaPokemons)
     };

     function ejercicioSeisDos(){
        const pokemons = [
            {nombre:'Garchomp', tipoDePokemon:'Tierra' },
            {nombre:'Kyogre', tipoDePokemon:'Agua'},
            {nombre:'Charmander', tipoDePokemon:'Fuego'},
            {nombre:'Arbok', tipoDePokemon:'Fuego'},
        ];
    
        let listaPokemonsFuego = [];
    
         for (let i = 0; i < pokemons.length; i++) {
            var tipoPokemon = pokemons[i].tipoDePokemon
            if (tipoPokemon == "Fuego") {
                listaPokemonsFuego.push(pokemons[i].nombre)
            }
            
    
             }
         console.log(listaPokemonsFuego)
         };

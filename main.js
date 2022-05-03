// Primer Desafio

/*
let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++){
    let multiplo = numero * i;
    alert (numero + "X" + i + "=" + multiplo);
}
*/

// Segundo Desafio
/*
alert ("Problema: ¿Obtener el promedio de estatura de un grupo de personas, cuyo numero de miembros se desconoce?")

let estatura = parseInt (prompt ("Ingrese una Estatura en centimetros"))
let cantPersonas = 0
let sumarEstaturas = 0

while (estatura > 0){
    estatura = parseInt (prompt ("Ingrese una Estatura en centimetros"))
    cantPersonas = cantPersonas + 1
    sumarEstaturas = sumarEstaturas + estatura

}

if (cantPersonas === 0) {
    alert ("No hay estaturas ingresadas")
}else{
    alert (`El promedio de estaturas de las ${cantPersonas} personas es de: ${sumarEstaturas/cantPersonas} centimetros`)
}
*/

//Tercer desafio (Arrays)
/*
//ARRAYS    
let abril = ["Batman", "Sonic", "Morbius", "La Ciudad Perdida", "El Buen Patron"]
let mayo = ["Dr Strange", "La Medium", "Maverick", "Supermascotas"]
let junio = ["Jurassic World Dominio", "Lighyear", "Gemelo Siniestro", "Minions 2"]


console.log("***** Cartelera del Cine de Abril *****")


for(i = 0; i < abril.length; i++){
    
    console.log(abril [i])
}

console.log (abril)


console.log("***** Cartelera del Cine de Mayo ******")

abril.splice(0,3)

let cartelera = abril.concat (mayo)


for(i = 0; i < cartelera.length; i++){
    
    console.log(cartelera [i])
}

console.log (cartelera)

console.log("****** Cartelera del Cine de Junio *****")


cartelera.splice(0,2)
cartelera.pop()
cartelera.pop()

carteleraJunio = cartelera.concat (junio)

for(i = 0; i < carteleraJunio.length; i++){
    
    console.log(carteleraJunio [i])
}

console.log (carteleraJunio)
*/

//*********************PRIMER DESAFIO FINAL***********************


class Estreno {
    constructor (pelicula, genero, duracion, clasificacion, mes){
        this.pelicula = pelicula
        this.genero = genero
        this.duracion = duracion
        this.clasificacion = clasificacion
        this.mes = mes
    }
}

const Estreno1 = new Estreno ("Batman", "Accion", 176, "+16", "abril")
const Estreno2 = new Estreno ("Sonic", "Animacion", 122, "+13", "abril")
const Estreno3 = new Estreno ("Morbius", "Accion", 108, "+13", "abril")
const Estreno4 = new Estreno ("El Buen Patron", "Comedia", 120, "+13", "abril")
const Estreno5 = new Estreno ("Jack caja Maldita", "Terror", 87, "+13", "abril")
const Estreno6 = new Estreno ("Dr Strange", "Accion", 126, "AC", "mayo")
const Estreno7 = new Estreno ("Supermascotas", "Animacion", 90, "ATP", "mayo")
const Estreno8 = new Estreno ("La Medium", "Terror", 90, "+16", "mayo")
const Estreno9 = new Estreno ("Top Gun Maverick", "Drama", 90, "+13", "mayo")
const Estreno10 = new Estreno ("Jurassic World Dominio", "Ciencia Ficcion", 90, "+13", "junio")
const Estreno11 = new Estreno ("Lighyear", "Animacion", 90, "ATP", "junio")
const Estreno12 = new Estreno ("Gemelo Siniestro", "Terror", 90, "+16", "junio")
const Estreno13 = new Estreno ("Minions 2", "Animacion", 90, "ATP", "junio")

//*********************************************************************** */


const Estrenos = [Estreno1, Estreno2, Estreno3, Estreno4, Estreno5, Estreno6, Estreno7, Estreno8, Estreno9, Estreno10, Estreno11, Estreno12, Estreno13]


// UTILIZANDO METODO DE BUSQUEDA EN LOS ARRAYS (Mes y titulos de peliculas de ese mes)

const resultado = Estrenos.filter(function (movie) {
    return movie.mes === 'abril'
})
.map(function(movie){
    return movie.pelicula;
});


console.log(resultado)






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
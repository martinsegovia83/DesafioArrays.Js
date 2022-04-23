// Primer Desafio

/*
let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++){
    let multiplo = numero * i;
    alert (numero + "X" + i + "=" + multiplo);
}
*/

// Segundo Desafio

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





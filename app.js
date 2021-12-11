// //como se declaran variables 
// //dos tipos de variables 
// const variableConstante = 9.8;
// let variableLocal;

// //como asignar datos a una variable
// //nota: recuerda que la asignacion de datos es de derecha a izquierda
// variableLocal = 'Hola mundo'; //dato string o cadena de texto

// //declaracion de datos desde la inicializacion 
// let variableLocal2 = 'como estas';

// //estructura basica de una condicional
// //if( condicion ){ //cuerpo del programga}
// //nota: recuerda que el if si se cumple la condicion nos dara un valor booleano
// //se ocupan los operadores and or not

// let edad = 18;
// //if basico
if( edad >= 18 ) {
    console.log('Eres mayor de');
}

// // if else
let numero = 9;
if( numero > 0 ) {
    console.log('Es un numero positivo');
}else {
    console.log('No es un numero positivo');
}

// //if else elseif
let promedio = 6.9;

if( (promedio >= 7) && (promedio < 9) ){
    console.log('Tienes un promedio suficiente');
}else if( promedio >= 9 && promedio <= 10) {
    console.log('Tienes un promedio excelente');
}else{
    console.log('Tienes un promedio insuficiente');
}

// //estructura basica de un ciclo for
// /*
//     for(declaracion de nuestra variable ; condicion ; iterador) {
//         //logica del programa
//     }
// */
// //mostrar los numeros del 1 al 10 utilizando for

// //manera tradicional
// //esto es una mala practica
let num1 = 1;
let num2 = 2;
let num3 = 3;
// // console.log( num1, num2, num3);
const i = 1;
// //utilizando un ciclo 
for( let i = 0 ; i <= 10; i++){
    console.log(i);
}

// //ciclo while
let j = 1;
while( j <= 10 ){
    console.log(j);
    j++;
}

//declaracion de arrays y objetos
//array vacio;
const array = [];

//array - asignacion de datos
const numeros = [ 12, 13, 14, 15, 16 ];

//array - como mostrar los datos del arreglo
//INDICES [0] - 0, 1, 2, 3, ..., n;
const nombres = ['carlos', 'Luis', 'Maris', 'pepe', 'Marite', 'Maria', 'jose'];
            // nombres[0] nombres[1] nombres[2]  nombres[3]   nombres[4]   nombres[5]    nombres[6]
console.log( nombres[ nombres.length - 1 ] );
//array.length retorna un numero, sirve para saber la longitud de un array 

//recorrer un array de forma de automatica usando for
const puestos = ['ADMINISTRADOR', 'PROGRAMADOR', 'DISEÑADOR', 'ANALISTA DE DATOS'];

for(let i = 0; i<puestos.length; i++){
    console.log(puestos[i]);
}

//metodos predefinidos de los arrays 
//ciclo forEach
// array.forEach(function(value){})
const edades = [19, 25, 26, 18, 29];

edades.forEach(function(edad){
    console.log(edad);
});

edades.forEach((edad) => {
    console.log(edad);
});

//recorrer array con metodo map
//array.map()
const edades2 = [19, 25, 26, 18, 29];
edades2.map((edad) => {
    console.log(edad);
});

//agregar datos a un array 
//metodo array.push(//dato a agregar)
edades2.push(15);
console.log(edades2);

//metodo filter - sirve para filtrar informacion
//extraer las edades mayores a 25

//forma tradicional
let edadesMayores = [];
for(let i = 0; i < edades2.length; i++) {
    if(edades2[i] >= 25){
        edadesMayores.push(edades2[i]);
    }
}
//forma rapida con filter
edadesMayores = edades2.filter( (edad) =>{
    return edad >= 25 
});

console.log(edadesMayores);








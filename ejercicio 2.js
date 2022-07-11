/*2. Escribir el código de una función a la que se pasa como parámetro un número entero
 y devuelve como resultado una cadena de texto que indica si el número es par o impar.
  Mostrar por pantalla el resultado devuelto por la función.*/

let numero = 29;

function Residuo(numero){
  if(numero%2 == 0){
    console.log("El numero es par");
  }else{
    console.log("El numero es primo");
  }
}

Residuo(numero);
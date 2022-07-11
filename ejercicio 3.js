/*3. Definir una función que muestre información sobre una cadena de texto que
 se le pasa como argumento. A partir de la cadena que se le pasa, la función
  determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas 
  o por una mezcla de ambas.*/

 let cadena = "ESTE EJERCICIO";

 function resolver(cadena){
    if(cadena == cadena.toUpperCase()){
        console.log("La cadena esta hecha solo por MAYUSCULAS");
    }else if(cadena == cadena.toLowerCase()){
        console.log("La cadena esta hecha solo por MINUSCULAS");
    }else{
        console.log("La cadena contiene tanto mayusculas como minusculas");
    }
 }

 resolver(cadena);
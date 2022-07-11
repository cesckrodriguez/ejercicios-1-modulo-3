/*5. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
 es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
 "La ruta nos aporto otro paso natural".*/
const cadena = "larutanosaportootropasonatural";
 //hacemos la cadena en vector



function palindromo(cadena){

    let vector = cadena.split("");
    let vector2 = cadena.split("").reverse();

    console.log(vector);
    console.log(vector2);

    if(vector2.join("") == cadena){
        console.log("Es un palindromo")
        } else{
            console.log("No es un UN palindromo");
        }
    }
    

palindromo(cadena);


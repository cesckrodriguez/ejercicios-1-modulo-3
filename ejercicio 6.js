/*6. Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
 Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
 repitiendo 36.000 veces esta operación.*/

let vector = [];

 function lanzamiento(){
    let numero;

    numero = Math.random()*6;
    numero = Math.floor(numero+1);
    return numero;
 }

 function sumarDados(){
    let dado1;
    let dado2;
    let suma;

    dado1 = lanzamiento();
    dado2 = lanzamiento();

    suma = dado1+dado2;
    return suma;
 }

 for(let i=0; i<20; i++){
    vector[i] = sumarDados();

    console.log((i + 1)+(".- ")+vector[i]);
 }




 console.log(vector.length);

 console.log(vector);

function contar(){
   let contador = 0;
   let vectorAux = []; 
   vectorAux[contador] = vector[0];

   for(let i=1; i<vector.length; i++){
      if(vectorAux[contador] != vector[i]){
         if(vectorAux.includes(vector[i])){
            console.log("Ya contiene el valor")
         }else{
            contador += 1;
            vectorAux[contador] = vector[i];
         }
         
      }
   }

  return vectorAux;
}
 





let final =contar();

console.log(final);
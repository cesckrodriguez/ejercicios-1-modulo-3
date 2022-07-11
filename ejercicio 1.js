/*1. Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla los doce nombres utilizando la función console.log().*/

 const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  for(let i=0; i<meses.length; i++){
    console.log((i+1)+" " + meses[i]);
  }

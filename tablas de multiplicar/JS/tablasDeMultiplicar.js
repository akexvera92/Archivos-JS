//Joan Alexander Vera Beltran
//Ficha 2470980
// 20/06/2022
//Definimos el sw en false 
let sw=false;
//Hacemos un ciclo Do
do{
    //Preguntamos que tabla desea 
    let i = prompt("¿Qué tabla desea?");
    //Este while valida que dijite solo numeros
    // y vuelve a preguntar que tabla desea
  while (i == null || /\D/.test(i) || i== "") {
 i= prompt("¿Qué tabla desea?");
};
//si el campo es vacio da la tabla del 5
  if(i === ""){   i = 5; }
    var tabla = i
  // En este for hacemos la multiplicacion 
  let mostrarMultiplicacion=""  
for (let i = 1; i < 11; i++) {
   
//Definimos una variable y la nombramos dentro para montras todas las tablas esto sirve para salto de reglon"\n"
    mostrarMultiplicacion=mostrarMultiplicacion+tabla + "*" + i + "=" + tabla * i+"\n"
      
}
 //Este alert muestra las tablas 
alert(mostrarMultiplicacion)
//Se define este var para para que de la variable mensaje
var mensaje = 'Gracias por utilizar el programa';
//si la persona desea una una nueva tabla vuelve a realizar el proceso de nuevo
 sw = confirm('¿Desea una nueva tabla?') 
//vuelve a dar la variable mensaje

}while(sw) 
alert(mensaje)

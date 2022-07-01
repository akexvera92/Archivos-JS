//Joan Alexander Vera Beltran 
//Ficha 2470980
// 20/06/2022
//Realizamos un ciclo do

do{
  //validamos que el cliente dijite solo letras
  nombreCliente=validacionNombre("Dijite su nombre")
  //ponemos los productos en la tienda   
  let productosTienda={
       P:"pantalon"+"\n",
       C:"camisas"+"\n",
       M:"medias"+"\n"
     };         
     //Mostramos los productos de la tienda
       alert("p:pantalon"+"\n" +"c:camisas"+"\n" +"m:medias")
     do{
       //le Decimos al cliente que dijite una letra de los productos antes mostrados
      letraProducto=prompt("digite la letra del producto que quieres comprar")
      //Utilizamos este metodo àra que las letras queden en mayuscula
       letraMayus=letraProducto. toUpperCase ()
      //definimos esta variable booleana
     esta = false
     //realizamos este ciclo para validar datos
     for(let key in  productosTienda){
       if (key ==  letraMayus){
         esta = true}
     }
     //este while valida la letra si no es igual sube al do
     }while (esta==false)  
     //mostramos la variable
     alert(esta)
     //Le decimos que digite la cantidad del producto
     cantidadProducto=prompt("Digite la cantidad del producto que quieres comprar")
     //Mostramos la cantidad
     alert(cantidadProducto)
     //este while valida que solo dijite numeros
while (cantidadProducto == null || /\D/.test(cantidadProducto) || cantidadProducto== "") {
  cantidadProducto = prompt("Digite la cantidad del producto que quieres comprar");
};

     //Realizamos este switch
switch(letraMayus){
  //Hacemos un case por cada letra del producto 
  //Muestra un mensaje del valor  
  //Multiplica  la cantidad digitada por cliente * por el precio 
     case 'C':
     alert("El producto seleccionado es camisa con un costo por unidad de 20000")
     camisas=20000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + camisas + " pesos" );
     break;
     case 'P':
     alert("El producto seleccionado es pantalon con un costo por unidad de 50000")
     pantalones=50000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + pantalones + " pesos" );
     break;
     case 'M':
     alert("El producto seleccionado es medias con un costo por unidad de 5000")
     medias=5000*cantidadProducto
     alert("un buen dia "+nombreCliente+" "+"Su total a pagar es de " + medias + " pesos" );
     break;
     default:
     alert("El valor digitado es incorrecto")
     };   
     //pregunta si desea volver a la tienda si confirma vuelve a hacer el ciclo
     rep = confirm("Desea volver a la tienda ");      
     }while(rep===true)
//Realizamos la validacion de texto
function validacionNombre(texto) {

do {
  let nombre = prompt(texto);

  if (nombre !== "" && !(!/^[a-zA-Z ]*$/g.test(nombre)))
    return nombre;
} while (true);
}
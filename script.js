//alert("Hola este es mi Javascript");
//let nombre = "Martha"
//var nombre1 = "Martha"
// const nombre2  = "Martha"
/*console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/
//SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Nombre";
//let titulo =document.querySelector(".logo.fuente-titulo.innerHTML= //contenidoTitulo;


//CONDICIONALES
//let textoTitulo = titulo.innertext;
//console.log(textoTitulo);
//if(textoTitulo == "Nombre"){
  //  titulo.innerHTML = "otro";

//}
//FUNCIONES

let  nombre3 = "Ani";
let  ciudad = "Cali";
let  gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre3,ciudad,gusto){
    let contenido = `Me llamo ${nombre3}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto}  y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
    return contenido;
}

parrafo.contenido = cambiarTexto(nombre3,ciudad,gusto);

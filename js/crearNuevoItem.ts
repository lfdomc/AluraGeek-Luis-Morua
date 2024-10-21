import { conexionAPI } from "./conexionAPI.js";
import { listarItems } from "./mostrarItems.js";
//import {btnEliminarList} from "./mostrarItems.js";


async function crearNuevoElemento (event:Event){
event.preventDefault();
const name: string= (document.querySelector("[data-name]") as HTMLFormElement).value;
const price: string= (document.querySelector("[data-price]") as HTMLFormElement).value;
let image: string= (document.querySelector("[data-image]") as HTMLFormElement).value;

//var trueimage= image;
function convertPath(originalPath:string) {
    return originalPath.replace(/C:\\fakepath\\/g, './image/Items/');
};
var trueimage = convertPath(image);
console.log(trueimage);

image= trueimage;

console.log(name,price,image);
try{
    await conexionAPI.crearNuevoItem(name,price,trueimage);
    //alert("Ëlemento Creado!!")
}catch(e){
    alert(e)

 }
 limpiar(event);
 listarItems();  
}

async function limpiar(event: Event) {
    
    event.preventDefault();
    var elementos = document.getElementsByTagName('input');
    // Iterar sobre los elementos y limpiar cada uno
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].value = "";
    }

   

}

const botonEnviar :HTMLElement= document.getElementById('enviar')!;
botonEnviar.addEventListener("click",event =>crearNuevoElemento(event));

const botonLimpiar :HTMLElement= document.getElementById('clear')!;
botonLimpiar.addEventListener('click', event=> limpiar(event));

//elementos.addEventListener("click",evento=> crearVideos(evento));
//Se exporta y crea la funcion crearItem que recibe 3 parametros, y crea un elementos de html
export function crearItem(name, price, image, id) {
    //Se crea un elemento de tipo li en la constante item
    const item = document.createElement("li");
    //Se le asigna el tipo  "list-item"clase al nuevo elemento
    item.className = "list-item";
    // Se le agrega el siguiente HTML el cual tiene incertado los elementos recibidos como paramentros
    item.innerHTML = `                      
                        <img src=${image} alt="item image" class="item-image">
                        <p class="text-list">${name}</p>
                        <section class="price-delete">
                            <h3 classe="price">${price}</h3>
                                <button class="btn-eliminar button-eliminar">
                                <img src="./image/eliminar.png" alt="borrar" class="eliminar" width="50px">
                                </button>
                        </section>`;
    console.log(item);
    //Retorna la constante item con toda la información                                     
    return item;
}

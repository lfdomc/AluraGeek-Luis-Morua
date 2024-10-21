// Importa la función que hace la conexión con la URL de la API
import { conexionAPI } from "./conexionAPI.js";
// Importa la función que hace la creación de nuevos elementos de Lista
import { crearItem } from "./fomarItems.js";
// Crea una constante y la selecciona como tipo data-lista, que es donde va a agregar los elementos 
const lista = document.querySelector("[data-lista]");
// Función asíncrona que crea los elementos, recorriendo el array listaAPI y después llamando la función crearItem por cada elemento
export async function listarItems() {
    try {
        // Limpia la lista
        lista.innerHTML = '';
        // Crea una constante tipo Array con datos tipo Objeto y le agrega los elementos que se leen en la conexión de la API
        const listaAPI = await conexionAPI.recibirDatosAPI();
        // Verifica si la lista está vacía
        if (listaAPI.length === 0) {
            lista.innerHTML = '<li>No se han agregado productos.</li>';
            return; // Sale de la función si no hay elementos
        }
        // Recorre el arreglo y por cada item crea un elemento con 3 parámetros mediante la función crearItem
        listaAPI.forEach((i) => {
            const itemElement = crearItem(i.name, i.price, i.image, i.id);
            lista.appendChild(itemElement);
            // Selecciona el botón de eliminar dentro del nuevo elemento
            const btnEliminar = itemElement.querySelector('.btn-eliminar');
            // Agrega un evento de clic para eliminar el elemento
            btnEliminar.addEventListener('click', () => {
                const id = itemElement.getAttribute('data-id');
                console.log(i.id);
                lista.removeChild(itemElement);
                conexionAPI.eliminarItem(i.id);
            });
        });
    }
    catch (error) {
        // Manejo de errores
        console.error("Ocurrió un error al listar los elementos:", error);
        lista.innerHTML = '<li>Error al cargar los elementos. Por favor, intenta nuevamente.</li>';
    }
}
listarItems();

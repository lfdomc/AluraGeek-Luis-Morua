/*Función asíncrona que se conecta a la URL y hace un llamado GET, luego recibe los datos de la conexión
y los lleva a una constante llamada datos.
*/
async function recibirDatosAPI() {
    try {
      // Se crea una constante url que recibe el link de la conexión   
      const url: string = "https://repositorio-json-falso.vercel.app/Items";
 
      // Se realiza un fetch de tipo GET a la url
      const conexionDB: Response = await fetch(url);
  
      // Verifica si la solicitud fue exitosa
      if (!conexionDB.ok) {
        throw new Error(`Error en la solicitud: ${conexionDB.statusText}`);
      }
  
      // Se crea la constante datos que descompone la información de tipo json a un objeto
      const datos = await conexionDB.json();
      
      // Se retorna la constante datos que es de tipo objeto
      return datos;
  
    } catch (error) {
      // Captura cualquier error que ocurra durante la solicitud o procesamiento de datos
      console.error("Hubo un error al recibir los datos:", error);
      
      return null;
    }
  }
/*Función asíncrona que conecta a la URL y requiere 3 parametros, tambien hace un llamado POST, 
luego recibe los datos de la conexión y los lleva a una constante llamada datos.
*/
async function crearNuevoItem(name: string, price: string, image: string) {
    // Se crea una constante con la URL 
    const url2: string = "https://repositorio-json-falso.vercel.app/Items";
    try {
        // Se crea una conexión de tipo POST, con la URL, el método, los headers, y los parámetros requeridos
        const conexion = await fetch(url2, {
            // método a realizar
            method: "POST",
            // headers
            headers: { "Content-type": "application/json" },
            // crea el objeto a JSON
            body: JSON.stringify({
                name: name,
                price: `$${price}`,
                image: image,
            })
        });

        // Verifica si la respuesta fue exitosa
        if (!conexion.ok) {
            throw new Error(`Error en la solicitud: ${conexion.status} ${conexion.statusText}`);
        }

        const responseData = await conexion.json();
        console.log("Item creado con éxito:", responseData);

    } catch (error) {
        console.error("Error al crear el nuevo item:", error);
    }
}

export async function eliminarItem(id:string|number) {
    // Se crea una constante con la URL, incluyendo el ID del ítem que se va a eliminar
    const url: string = `https://repositorio-json-falso.vercel.app/Items/${id}`;
    try {
        // Se crea una conexión de tipo DELETE con la URL
        const conexion = await fetch(url, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });

        // Verifica si la respuesta fue exitosa
        if (!conexion.ok) {
            throw new Error(`Error en la solicitud: ${conexion.status} ${conexion.statusText}`);
        }

        // Si la eliminación fue exitosa
        alert(`Item con ID ${id} eliminado con éxito.`);

    } catch (error) {
        console.error("Error al eliminar el item:", error);
    }
}

  // Se exporta la función mostrarItems por medio de la constante conexionAPI
  export const conexionAPI = {
    recibirDatosAPI,crearNuevoItem,eliminarItem
  };
  
  // Se ejecuta la función mostrarItems
  recibirDatosAPI();


// Constructor y los Objetos creados
function mueble(nombre, precio, madera, medidas, color) {
  this.nombre = nombre;
  this.precio = precio;
  this.madera = madera;
  this.medidas = medidas;
  this.color = color;
}

const jgoComedor = new mueble("juego de comedor", 12000, "MDF", "1.50 * 60", "Roble");
const sillones = new mueble("sillones", 9000, "Roble", "2.00 * 80", "blanco");
const escritorio = new mueble("escritorio", 15000, "MDF Brasilero", "1.80 * 50", "negro");
const sommier = new mueble("sommier", 12000, "pino", "2.40 * 1.40", "beige");
const respaldo = new mueble("respaldo", 6500, "MDF", "1.40 * 1.20", "bordeau");

let muestraDeMuebles = [jgoComedor, sillones, escritorio, sommier];

// Función para agregar muebles al array
function agregarMuebles(mueble) {
  muestraDeMuebles.push(mueble);
}
agregarMuebles(respaldo);

console.log(muestraDeMuebles);
function seleccionarYEliminarMueble() {
  let mensaje = "Ingrese el número del mueble deseado:\n\n";
  
  muestraDeMuebles.forEach((mueble, i) => {
    mensaje += `${i + 1}) Nombre: ${mueble.nombre}\n`;
    mensaje += `   Precio: $${mueble.precio}\n`;
    mensaje += `   Madera: ${mueble.madera}\n`;
    mensaje += `   Medidas: ${mueble.medidas}\n`;
    mensaje += `   Color: ${mueble.color}\n\n`;
  });

  let eleccionMueble = parseInt(prompt(mensaje));

  if (eleccionMueble > 0 && eleccionMueble <= muestraDeMuebles.length) {
   
    const muebleSeleccionado = muestraDeMuebles[eleccionMueble - 1];
    
    
    let confirmacion = confirm(`Desea comprar el siguiente mueble?\n\nNombre: ${muebleSeleccionado.nombre}\nPrecio: $${muebleSeleccionado.precio}\n\nPresione OK para confirmar la compra, o Cancelar para elegir otro mueble.`);
    
    if (confirmacion) {
     
      alert(`¡Compra exitosa!\n\nNombre: ${muebleSeleccionado.nombre}\nPrecio: $${muebleSeleccionado.precio}`);
      
    
      muestraDeMuebles.splice(eleccionMueble - 1, 1);
      alert("El mueble ha sido eliminado exitosamente del stock.");
    } else {
      alert("Compra cancelada. El mueble no ha sido eliminado.");
    }
  } else {
    alert("Opción inválida. Por favor, elija un número válido.");
  }
}


seleccionarYEliminarMueble();

console.log(muestraDeMuebles);

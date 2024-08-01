class Producto {
  constructor(nombre, codigo, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
  }

  informacionProducto() {
    document.write(`<div>
        <table>
            <tr>
                <td><b>Producto</b></td>
                <td><b>Codigo</b></td>
                <td><b>Precio</b></td>
            </tr>
            <tr>
                <td>${this.nombre}</td>
                <td>${this.codigo}</td>
                <td>${this.precio}</td>
            </tr>
           </table>
      </div>
      <br>`)
  }
}

const energisante = new Producto("Monster", "432500", "$1500");
const yogurt = new Producto("la serenisima", "203056", "$1900");
const yerba = new Producto("verde flor", "300081", "$1500");

const productos = [energisante, yogurt, yerba];

productos.forEach(Producto => Producto.informacionProducto());

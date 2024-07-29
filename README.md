# Trabajo Pratico Objeto y Clases - Julian Garay

## Objetos definición
En JavaScript, un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, lo que hace que las propiedades también sean métodos del objeto.

### Ejemplos

#### Usando la sintaxis de objeto literal:


```dotnetcli
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
```

#### Usando el constructor Object:

```dotnetcli
let persona = new Object();
persona.nombre = "Juan";
persona.edad = 30;
persona.saludar = function() {
    console.log("Hola, soy " + this.nombre);
};
```

## Clases definición
En JavaScript, las clases son una forma de crear objetos y manejar la herencia basada en prototipos de manera más sencilla y clara. Las clases fueron introducidas en ECMAScript 6 (ES6) y proporcionan una sintaxis más conveniente para crear objetos y tratar con la herencia.

### Ejemplo


```dotnetcli
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let juan = new Persona("Juan", 30);
juan.saludar(); // "Hola, soy Juan y tengo 30 años."
```







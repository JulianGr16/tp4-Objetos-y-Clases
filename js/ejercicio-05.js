class Persona{
    constructor(nombre, edad, DNI, sexo, peso, altura, fechaNacimiento, añoNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fechaNacimiento = fechaNacimiento;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarDatos(){
        document.write(`<h2>Informacion de la persona</h2>
            <ul>
            <li>Nombre: ${this.nombre}</li>
            <li>Edad: ${this.edad}años</li>
            <li>DNI: ${this.DNI}</li>
            <li>Sexo: ${this.sexo}</li>
            <li>Peso: ${this.peso}</li>
            <li>Altura: ${this.altura}</li>
            <li>Fecha de nacimiento: ${this.fechaNacimiento}</li>
            <li>Año de Nacimiento: ${this.añoNacimiento}</li>
            </ul>`)
    }

    mayorDeEdad(){
        document.write('<h2>¿Sos mayor de edad?</h2>')
        if(this.edad >= 18){
            document.write(`la persona ${this.nombre} es mayor de edad`);
        }
        else{
            document.write(`la persona ${this.nombre} no es mayor de edad`);
        }
    }

    generacion(){
        const generacionZ = "Generacion Z";
        const generacionY = "Generacion Y millennials";
        const generacionX = "Generacion X";
        const generacionB = "Baby boom";
        const silentGeneration = "Los niños de la posguerra";

        if(this.añoNacimiento <= 2010 || this.añoNacimiento == 1994){
            document.write(`<h2>¿A que generacion perteneces?:</h2>
                <p> ${this.nombre} pertenece a ${generacionZ}. La circunstancia historica fue
                <b>La expansión masiva de internet</b> Rasgo caracteristico:<b>Irreverencia 😋</b> </p>`)
        }
        if(this.añoNacimiento <= 1993 || this.añoNacimiento == 1981){
            document.write(`<h2>¿A que generacion perteneces?:</h2>
                <p> ${this.nombre} pertenece a ${generacionY}. La circunstancia historica fue
                <b>Inicio de la digitación</b>Rasgo caracteristico: <b>frustración 🥶</b> </p>`)
        }
        if(this.añoNacimiento <= 1980 || this.añoNacimiento == 1969 ){
            document.write(`<h2>¿A que generacion perteneces?:</h2>
                <p> ${this.nombre} pertenece a ${generacionX}. La circunstancia historica fue
                <b>Crisis del 73 y transición española</b>Rasgo caracteristico: <b>Obseción por el exito 😎</b> </p>`)
        }
    }

    /*generarDni(){
        let dniRandom = parseInt(prompt('Ingrese el numero 8: '));
        if(dniRandom === 8){
            for(let i = 1; i <= 8; i++){
                return Math.floor(Math.random() * 8)
            }
        }
    }
    */
}

const pedro = new Persona("Pedro", "23", "40209771", "masculino", "70kg", "1,74", "15/06", "2001");
const juan = new Persona("juan", "15", "38059221", "masculino", "68kg", "1,67", "12/05", "2009");
const brenda = new Persona("brenda", "31", "20404123", "femenino", "56kg", "1,52",  "25/07", "1993")


pedro.mostrarDatos();
pedro.mayorDeEdad();
pedro.generacion();

document.write('<br>')

juan.mostrarDatos();
juan.mayorDeEdad();
juan.generacion();

document.write('<br>')

brenda.mostrarDatos();
brenda.mayorDeEdad();







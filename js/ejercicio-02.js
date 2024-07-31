class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = 0;
    }

    //metodos
    ingresar = (cantidad) =>{
        if(cantidad > 0){
            this.saldo += cantidad;
            document.write(`<p>se ingresaro ${cantidad} pesos. el saldo actual es de ${this.saldo} pesos</p>`)
        }
        else{
            alert('No se pueden ingresar un monto que no sea redondo');
        }
    }

    extraer = (cantidad) =>{
        if(cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad;
            document.write(`se extrajo ${cantidad} pesos. el saldo actual es de ${this.saldo} pesos`)
        }
        else{
            alert('no se puede extraer el monto ingresado')
        }
    }

    informar = () =>{
        return document.write(`<p>titular: ${this.titular}, saldo actual: ${this.saldo} pesos</p>`)
    }
}

let cuenta = new Cuenta("alex");

document.write(cuenta.informar());

cuenta.ingresar(500);

cuenta.extraer(200);

cuenta.informar();


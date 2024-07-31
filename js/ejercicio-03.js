class Rectangulo{
    constructor(alto, ancho){
        this.alto = 0;
        this.ancho = 0;
    }

    nuevoRectangulo = () =>{
        let alto = parseInt(prompt('ingrese el alto que desea que tenga su rectangulo'));
        let ancho = parseInt(prompt('ingrese el ancho que desea colocarle a su rectangulos'));
        let perimetro = 2 * (alto + ancho);
        let area = alto * ancho;

        if(alto > 0 && ancho > 0){
            document.write(`<p>el alto de su rectangulo mide: ${alto}cm</p>`);
            document.write(`<p>el ancho de su rectangulo mide: ${ancho}cm</p>`);
            document.write(`<p>el perimetro de tu rectangulo mide: ${perimetro}cm </p>`);
            document.write(`<p>el area de tu rectangulo mide: ${area}cm </p>`)
        }
        
    }
}

const rectangulo = new Rectangulo(0, 0);

rectangulo.nuevoRectangulo();
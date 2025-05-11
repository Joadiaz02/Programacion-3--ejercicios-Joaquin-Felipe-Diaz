class FiguraGeometrica {
    constructor() {
        if (this.constructor === FiguraGeometrica) {
            throw new Error("FiguraGeometrica es abstracta y no puede ser instanciada directamente.");
        }
        this.superficie = 0;
        this.perimetro = 0;
    }

    calcularDatos() {
        throw new Error("El método calcularDatos() debe ser implementado en la clase hija.");
    }

    dibujar() {
        throw new Error("El método dibujar() debe ser implementado en la clase hija.");
    }

    toString() {
        return `Superficie: ${this.superficie}\nPerímetro: ${this.perimetro}\n${this.dibujar()}`;
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        this.calcularDatos();
    }

    calcularDatos() {
        this.superficie = this.base * this.altura;
        this.perimetro = 2 * (this.base + this.altura);
    }

    dibujar() {
        let dibujo = '';
        for (let i = 0; i < this.altura; i++) {
            dibujo += '*'.repeat(this.base) + '\n';
        }
        return dibujo;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        this.calcularDatos();
    }

    calcularDatos() {
        this.superficie = (this.base * this.altura) / 2;
        this.perimetro = this.base * 3;  
    }

    dibujar() {
        let dibujo = '';
        for (let i = 0; i < this.altura; i++) {
            dibujo += ' '.repeat(this.altura - i - 1) + '*'.repeat(2 * i + 1) + '\n';
        }
        return dibujo;
    }
    
}

const t = new Triangulo(7, 4);  // Base = 7, Altura = 4
console.log(t.toString());


class Punto {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  toString() {
    return `(${this.#x}, ${this.#y})`;
  }
}

class Rectangulo {
  #vertice1;
  #vertice2;
  #vertice3;
  #vertice4;
  #ladoUno;
  #ladoDos;
  #area;
  #perimetro;

  constructor(vertice1, vertice3) {
    this.#vertice1 = vertice1;
    this.#vertice3 = vertice3;

    // Base siempre horizontal → construimos vértices 2 y 4
    this.#vertice2 = new Punto(vertice3.getX(), vertice1.getY());
    this.#vertice4 = new Punto(vertice1.getX(), vertice3.getY());

    this.#ladoUno = Math.abs(vertice3.getX() - vertice1.getX());
    this.#ladoDos = Math.abs(vertice3.getY() - vertice1.getY());

    this.#area = this.#ladoUno * this.#ladoDos;
    this.#perimetro = 2 * (this.#ladoUno + this.#ladoDos);
  }

  getArea() {
    return this.#area;
  }

  getPerimetro() {
    return this.#perimetro;
  }

  toString() {
    return `Rectángulo:
  Vértice 1: ${this.#vertice1.toString()}
  Vértice 2: ${this.#vertice2.toString()}
  Vértice 3: ${this.#vertice3.toString()}
  Vértice 4: ${this.#vertice4.toString()}
  Lado Uno (base): ${this.#ladoUno}
  Lado Dos (altura): ${this.#ladoDos}
  Área: ${this.#area}
  Perímetro: ${this.#perimetro}`;
  }
}

const p1 = new Punto(2, 3);
const p3 = new Punto(8, 7);

const rect = new Rectangulo(p1, p3);
console.log(rect.toString());



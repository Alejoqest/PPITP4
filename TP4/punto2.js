class Estufa {
    static registro = 0;
    #precio;
    constructor(precio, marca) {
        this.#precio = precio;
        this.marca = marca;
        const FABRICANTE = "";
    }
    get precio() {
        return this.#precio;
    }
    set precio(precio) {
        this.#precio = precio;
    }
}
const b = new Estufa(20.34,"Hp");
console.log("PUNTO 2\nEl precio de la estufa es: "+b.precio);
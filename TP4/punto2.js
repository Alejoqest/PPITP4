class Estufa {
    static registro = 0;
    #precio;
    constructor(precio, marca, FABRICANTE) {
        this.#precio = precio;
        this.marca = marca;
        const _FABRICANTE = FABRICANTE;
        Estufa.registro ++;
    }
    get precio() {
        return this.#precio;
    }
    set precio(precio) {
        this.#precio = precio;
    }
}
const b = new Estufa(235.34,"Hp", "HP");
console.log("PUNTO 2\nEl precio de la estufa es: "+b.precio);
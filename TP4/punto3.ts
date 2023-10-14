class EstufaTS {
    protected static registro : number = 0;

    constructor (private precio: number, public marca: string, protected  readonly FABRICANTE: string ) {
        EstufaTS.registro +1;
    }

    public getPrecio() : number {
        return this.precio;
    }

    public setPrecio(precio: number) {
        this.precio = precio;
    }

    protected static getRegisttro() {
        return EstufaTS.registro;
    }
}
const c = new EstufaTS (250.45, "HP", "HP");
console.log("PUNTO 3\nEl precio de la estufa es: "+c.getPrecio);
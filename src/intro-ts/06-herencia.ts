
class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("--------Herencia--------");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string,edad:number,sueldo:number){
        super(nom,edad);
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir()
        console.log(`Sueldo: ${this.sueldo}`);
    }
}
const persona6 = new Persona5('Fernando Puga',23)
persona6.imprimir();
const empleado = new Empleado('Ana',22,2000);
empleado.imprimir();
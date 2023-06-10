
// Funcion que no devuelve nada
function sumar(a:number,b:number):void{
    console.log(a+b)
}
let num=sumar(3,5)

console.log(num)

// Funcion que regresa un numero
function sumar2(a:number, b:number):number{
    //let tem = a+b
    return a+b
}

function operasBas(n1:number,n2?:number, n3:number=2):number{
    
    let tem = n1*n3
    return tem
}

console.log(operasBas(3,5,5))


interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calculaEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
}

// Creacion del objeto
const nuevaMascota:Mascota={
    nombre: "Miau",
    edad: 3,
    mostrarEdad(){
        console.log('La edad es: ', this.edad)
    }
}
calculaEdad(nuevaMascota, 2)

const funcSumar=function(n1:number,n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))


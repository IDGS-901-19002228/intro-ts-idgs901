

let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for (let tem of vector1)
    console.log(tem)    


let tem:(number|string)[]=[]
tem.push('Mario')
tem.push(123)

// el "?" hace que la variable o el tipo de dato es opcional
interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}

const alumno:Alumno={
    matricula:1234,
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com'
}

console.table(alumno)
/*
    TypeScript: lenguaje con tipos estaticos que permite detectar
    errores de asignacion en tiempo de desarrollo
*/

// Maneras de declarar variables
var num1 = 23
let num2 = 'rcr'
const num3 = 34

let version:number = 2.2

version = 23

let nombre:string = 'Puga'

let activo:boolean = true

// "|" este simbolo pipe permite asignar mas tipos de datos
let matricula:number|string|boolean = 1234
matricula='123abc'

let vector:number[]=[1,2,3,4]
//vector1.push(10)
console.log(vector)

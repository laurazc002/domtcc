
//construyendo arreglos

// 1. FORMA TRADICIONAL
let numeros = [1, 2, 3, 4, 5]
let nombres = ['juan', 'camila', 'andres', 'catalina'] 
let votos = [true, true, false, false, false, true]

// 2. FORMA POO
let numerosPOO = Array (1, 2, 3, 4, 5)
let nombresPOO = Array ('juan', 'camila', 'andres' , 'catalina')
let votosPOO = Array (true, true, false, false, false, true)

//IMPRIMIR LOS ELEMENTOS DEL ARREGLO
console.log(numeros)
console.log(numerosPOO)

//ACCEDER A UN ELEMENTO DEL ARREGLO
console.log(numeros[3])
console.log(numeros[4])

//OBJETOS EN JS -> atributos
let persona = {
    nombre : 'juan',
    edad : 34,
    cedula : '1234261',
    hinchadelNacional : true,
    foto : 'url'

}

console.log (persona)
console.log(persona.hinchadelNacional)


let producto = {
    nombre : 'Reloj',
    precio : '45200000',
    cantidad : '1',
    foto : 'url',
    descripcion : 'Reloj Cartier de mujer'
}


console.log(producto.precio)

// JSON = Java script object notation, para intercambiar datos 
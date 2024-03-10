// const a = 5; //const makes an error because no coge re-assigments, usar siempre que podamos
// console.log(a);
// a = 10;
// console.log(a);

// const names = [
//     'foo', 
//     'bar', 
//     'zoo'
// ];

// for (let i = 0; i < names.length; i++) {

// }

// let i = 1;
// i = i + 1;
// i++; //1 forma
// ++i;
// i += 1; // 2 forma = que lo anterior
// console.log(i);


const names = [11,21,33,4,5,6,7,8];

// for(let i = 0; i < names.length; i = i + 2) {
//   // console.log(i)
//   console.log(names[i]);
// }

// let i = 1;
// i = i + 1;
// i++;
// ++i;
// i += 1;
// console.log(i)

const num = 13;
const b = num % 2;
console.log(b);

const c = [45, 32];

c.push(3);
c.push(100);
console.log(c)


//OPERADORES ARITMÉTICOS

    let a1 = 5;
    let b1 = 7;

    // console.log(a1 + b1); // suma
    // console.log(a1 - b1); // resta
    // console.log(a1 * b1); // multiplicación
    // console.log(a1 / b1); // división
    // console.log(a1 % b1); // sobrante de la división
    // console.log(a1 ** b1); // elevado (potencia)


    //Incrementar:
    console.log(++a1); //incrementa el valor de a1 +1
    console.log(a1++); //coge el valor y lo incrementa otra vez, pero el valor final lo verás con la siguiente linea
    console.log(a1);

    //Decrementar:
    console.log(--a1); //reduce el valor de a1 -1
    console.log(a1--); //coge el valor y lo reduce otra vez, pero el valor final lo verás con la siguiente linea
    console.log(a1);

//OPERADORES DE ASIGNACION

    let d = 5;
    d = d + 5;

    d += 5;
    d -= 5;
    d *= 5;
    d /= 5;
    d %= 5;
    d **= 5;
    console.log(d);

//OPERADORES DE COMPARACIÓN

    //De relación
    let f = 5;
    console.log(f > 5); //En funcion del valor, en la consola veremos si es false o si es true.
    console.log(f >= 5);
    console.log(f < 5);
    console.log(f <= 5);

    //De igualdad
    console.log(f == 5); //esta valorando si son iguales, si lo son sera true
    console.log(f != 5); //la exclamacion hace referencia a si el valor es distinto a ese numero, como no lo es, sera false
    console.log(f === '5'); //este es false porque no tiene el mismo tipo de dato, ya que es una string
    console.log(f !== '5'); //este sera true porque le preguntamos si es distinto valor o dato
    
//OPERADORES LÓGICOS: AND, OR, NOT

    let mayor = false;
    let suscrito = true;

    //And &&
    console.log(mayor && suscrito); //Sera false porque solo puede ser true si son iguales
    //Or ||
    console.log(mayor || suscrito); //Sera true porque almenos 1 de los 2 es true, si los 2 son false sera false
    //Not !
    console.log(!mayor); //Sera true porque "not" cambia el resultado


//OPERADORES SHORT-CIRCUIT:

    //False: (todos los valores que evaluan en falso) = Falsy
        //False
        //0
        //''
        //null
        //undefined
        //NaN

    let nombre = '';
    let username = nombre || 'anonimo'; //Saldra anonimo, porque nombre esta vacio, lo cual lleva a un falsy y los que son false no se muestran
    console.log(username);

    function fn1() {
    console.log('soy function 1');
    return true;
    }
    function fn2() {
    console.log('soy function 2'); //se muestran las 2 porque son true
    return true;
    }
    let x = fn1() && fn2();

//OPERADORES DE BITWISE:

    // Solo coge bits = 0 o 1
    // Byte: 00000000 -> 0
    // Byte: 00000001 -> 1
    // Byte: 00000010 -> 2
    // Byte: 00000011 -> 3
    // Byte: 00000100 -> 4
    // Byte: 00000101 -> 5
    // Byte: 00000110 -> 6
    // console.log(1 | 3); // 00000011 El operador or, no va a elegir, sino que creara un nuevo bit en base a si uno de los dos contiene un uno 
    // console.log(1 | 4); // 00000101 Este dara un 5 porque es lo que forman los bits
    // console.log(3 | 5); // 00000111 bits del numero 7

    // console.log(1 & 3); // 00000001 Daran 1 o 0 en funci'on de si lo comparten o no
    // console.log(1 & 4); // 00000000
    // console.log(3 & 5); // 00000001 

//OPERADOR TERNARIO:
    // let edad = 25;
    // let acceso = edad > 17 ? 'Permitir ingreso' : 'No puede ingresar'; 
    // console.log(acceso); //Si es true mostrara lo primero, si no mostrara lo segundo. Estos operadores son como el if

//OPERADORES DE CONTROL DE FLUJO (IF, ELSE...)

//OPERADOR IF, ELSE:
    let edad = 25;
    if (edad > 17) { //todo lo de dentro de la llave se llama bloque de codigo
        console.log('usuario mayor de edad')
    }
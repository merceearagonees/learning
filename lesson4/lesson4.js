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
    let username = nombre || 'anonimo'; //Saldra anonimo, porque nombre esta vacio, lo cual lleva a un falsy
    console.log(username);

    function fn1() {
    console.log('soy function 1');
    return true;
    }
    function fn2() {
    console.log('soy function 2');
    return true;
    }
    let x = fn1() && fn2();
    
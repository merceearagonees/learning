//create a function called calculator, with 3 parameters (first one= if it's + or - or * or /)
//(second one and third are numbers)
//function called add que hará el return to see the final result que estara metido en la primera funcion


// the input you pass in has to be a number not a string
//search how to recognize if the input that you pass is a number
//if it's not a number it has to be false


function calculator(operation, a, b) {
    let result;

    if (typeof a !== 'number' || typeof b !== 'number'){
        console.log('False');
    }
    else if (operation === '+') {
        result = sum(a, b);
    }
    else if(operation === '-') {
        result = substract(a, b);
    }
    else if(operation === '*') {
        result = multiplication(a, b);
    }
    else if(operation === '/') {
        result = division(a, b);
    }
    else {
        console.log('error');
    }
    console.log(result);
}

function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

calculator('+', 1, 4);
calculator('*', 7, 3);
calculator('/', 6, 2);
calculator('-', '4', '2');

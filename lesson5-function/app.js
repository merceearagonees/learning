function bottleOpener (bottleType) {
    
    const bottleTypes = ['beer', 'wine'];
    if (bottleType === 'beer bottle' || bottleType === 'wine bottle') {
        console.log('open bottles ' + bottleType);

    }
    else {
        console.log('invalid bottleType');
    }

}

bottleOpener('beer bottle');
bottleOpener('wine bottle');
bottleOpener('coke bottle');

// const bottleTypes = ['beer', 'wine'];
// const hasValidType = bottleTypes.includes('coke');
// console.log(hasValidType);


// ? igual a if
// : igual a else

function iceCreamMachine (flavor, size, topping) {
    console.log(flavor);
    console.log(size);
    console.log(topping);


}

iceCreamMachine('chocolate', 'big', 'nuts')

function add(a, b) {
    const sum = a + b;
    return sum;
}

const sum = add(1, 3)
console.log(sum);


function vendingMachine(productType, productName) {
    if (productType === 'drink') {
        getDrink(productName);

    } else if(productType === 'chocolate') {
        getChocolate(productName);
    } else {
        console.log('invalid product name');
    }
}

function getDrink(name) {
    console.log('drink:; ' + name);
}

function getChocolate(name) {
    console.log('chocolate:; ' + name);
}

vendingMachine('drink', 'locozade');
vendingMachine('chocolate', 'hazelnut');





//1-JSON data

const user = { //json basic. ESTO es un pedazo de data, tipo info que das al gmail personal
    name: 'merce',
    age: 24,
    address: '24 the holly',
    gender: 'female',
    cart: [ //will need to push things in
        {
            itemId: 'a-123',
            name: 'toothbrush',
            price: 12.5,
            currency: 'euro',
            quantity: 3,
            picture: 'https://example-link'
        }, //coma para separar importante
        {
            itemId: 'a-234',
            name: 'shoe',
            price: 32.5,
            currency: 'euro',
            quantity: 1,
            picture: 'https://example-link'
        },
    ], 
}; 

//2-JSON MAPPING

const logicMap = { //map to avoid if else       
    plus: (a, b) => a + b,      //fat arrow function que en vez de poner return se puede poner la fat arrow y hace de return
    minus: (a, b) => a - b,     //funcion anonima dentro de map sirve
    multiply: (a, b) => a * b,  
    divide: (a,b) => {
        if(b === 0) console.log('error')
        else return a / b;
    },
};
console.log(user);
console.log(user.cart); // para solo mostrar algo de dentro de user de forma mas concreta
console.log(user.cart[1].price);
console.log(logicMap.plus(1,2));
console.log(logicMap['plus'](1,2));

//3-JSON INSTANCE

function calculator(operation, a, b) {
    return logicMap[operation](a, b);
}

const result = calculator('plus', 2, 4);
console.log(result);

const personObj = {
    name: 'merce',
    age: 24,
    walk: () => {
        console.log('walk');
    },
    grow: function() { //lo de dentro del this, no se puede sumar si es fat arrow function
        this.age = this.age + 1; //THIS significa igual que su padre, en este caso es personObj
        console.log('growing');
    }
}

personObj.grow();
console.log(personObj.age); //NO como el de arriba porque no es una funcion, así que tiene que ir dentro


class Car {
    color = 'black'; //THIS ARE CALLED PROPERTIES
    lightBrightness = 1;
    speed = 0;
  
    constructor(color, lightBrightness, speed) { //funcion de constructor muy importante para construir especificaciones de cada class y no dejar las default (ej cambiar color)
      if(color) this.color = color;
      if(lightBrightness) this.lightBrightness = lightBrightness;
      if(speed) this.speed = speed;
    }
  
    turnUpBrightness() { //THIS ARE CALLED METHODS
      if(this.lightBrightness >= 10) return;
      this.lightBrightness++;
    }
    turnDownBrightness() {
      if(this.lightBrightness === 0) return;
      this.lightBrightness--;
    }
  }
  
  const car = new Car('red', 4, 0);
  const car2 = new Car('yellow', 5, 2);
  const car3 = new Car(null, null, 6);
  
  
  const cars = {  //esto para hacer un console.log general sin tener que hacer miles, creas constante con todos los class y consolelog solo este
    car, car2, car3
  }
  car.turnUpBrightness();
  console.log(cars);


//LO SIGUIENTE ES OTRA FORMA DE HACER MAS SEGURO TU CODIGO PERO MAS AVANZADA, con esto se consigue que se declare el tipo de cada linea para que no haya ningun problema futuro con el cogido o bug

// const foo = ['asdf', '']


// type TAllowedUserName = 'ed' | 'me' | 'yw';

// type TUser = {
//   name: TAllowedUserName;
//   age: number;
//   address?: string;
//   gender: string;
//   cart: TCart[] 
// }

// type TCart = {
//   itemId: string;
//   name: string;
//   price: number;
//   currency: string;
//   quantity: number;
//   picture: string;
// }

// const user: TUser = {
//   name: 'yw',
//   age: 12,
//   // address: '24 the holly',
//   gender: 'male',
//   cart: [
//     {
//       itemId:'a-123',
//       name: 'toothbrush',
//       price: 12.5,
//       currency: 'euro',
//       quantity: 3,
//       picture: 'https://example-link'
//     },
//     {
//       itemId:'a-234',
//       name: 'shoe',
//       price: 32.5,
//       currency: 'euro',
//       quantity: 1,
//       picture: 'https://example-link'
//     },

//   ],
// };
// user.name = 'me'
// console.log(user);







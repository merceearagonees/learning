class Animal {
    isAlive = true;  //flase y true son boolings por lo que los nombres empiezan  con is O has
    legs = 4;
    name = 'animal';
    age = 10;

    move() {

    }

    eat() {
        console.log('eat');
    }
    grow() {
        this.age = this.age +1;
    }
    die() {
        this.isAlive = false;
    }

}

class Cat extends Animal {
    name = 'cat'; //sobreescribimos lo de la primera class

    eat() {
        console.log('cat eat');
    }
    meow() {
        console.log('i am sleepy cat');
    }
}

class Dog extends Animal {
    bark() {
        console.log('dog barking');
    }
}

class PitBull extends Animal {
    
}

const cat = new Cat();
console.log(cat);
cat.eat(); //console.log directamente
cat.meow();

const dog = new Dog();
dog.bark();

const pitBull = new PitBull();
console.log(pitBull);


class LoginForm {
    username = '';
    password = '';
    confirmPassword = '';
    errorMessage = [];
    isAllInputCorrect = null;

    submit() {
        //send https request to a server
        //this.username and this.password
    }


    validateInput() {
       if(this.password !== this.confirmPassword) {
        this.errorMessage.push('passwords do not match');   
        this.isAllInputCorrect = false;
        
    }
    else if(this.username.length >= 16) {
        this.errorMessage.push('username not correct');
        this.isAllInputCorrect = false;
    }
    }

}

//keep working in the calculator, create a class
//inside the class we will have + and - functions only (2)
//create a new instance of that calculator, call the - and + and then like the car brightness 
//simple but dinamic

class Calc {
    A = 1;
    B = 1;
    Result = 0;
    
    constructor(A, B) {
        if(A) this.A = A;
        if(B) this.B = B;
    }
    turnUpResult() { //also could it be done by adding a return result instead???
        this.Result = this.A + this.B;
    }
    turnDownResult() {
        this.Result = this.A - this.B;
    }
}

const calcOp = new Calc(); //default values
calcOp.turnUpResult();

const calcOp2 = new Calc(3, 2);
calcOp2.turnDownResult();

const calcOp3 = new Calc(6, 8);
calcOp3.turnUpResult();


const calcs = {
    calcOp, calcOp2, calcOp3
}
console.log(calcs);


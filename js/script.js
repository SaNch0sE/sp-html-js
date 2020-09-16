class Calc {
    static firstNum = 0;
    static secondNum = 0;
    
    static getNumbers() {
        this.firstNum = parseFloat(document.getElementById('inp').value);
        this.secondNum = parseFloat(document.getElementById('inp1').value);
    }

    plus() {
        Calc.getNumbers();
        document.getElementById('result').innerHTML = (Calc.firstNum + Calc.secondNum);
    }

    minus() {
        Calc.getNumbers();
        document.getElementById('result').innerHTML = (Calc.firstNum - Calc.secondNum);
    }

    multiply() {
        Calc.getNumbers();
        document.getElementById('result').innerHTML = (Calc.firstNum * Calc.secondNum);
    }

    divide() {
        Calc.getNumbers();
        document.getElementById('result').innerHTML = (Calc.firstNum / Calc.secondNum);
    }
}

const calc = new Calc();

document.getElementById('plus').addEventListener('click', calc.plus);
document.getElementById('minus').addEventListener('click', calc.minus);
document.getElementById('multiply').addEventListener('click', calc.multiply);
document.getElementById('divide').addEventListener('click', calc.divide);
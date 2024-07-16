class Calculator {
    constructor() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
    }

    appendNumber(number) {
        this.currentNumber += number;
    }

    setOperation(op) {
        if (this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.calculateResult();
        }
        this.operation = op;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    calculateResult() {
        let result;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentNumber = result.toString();
        this.operation = null;
        this.previousNumber = '';
    }

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
    }

    getDisplay() {
        return this.currentNumber || this.previousNumber || '0';
    }
}

// Example usage:
const calculator = new Calculator();

calculator.appendNumber('5');
calculator.setOperation('+');
calculator.appendNumber('3');
calculator.calculateResult();
console.log(calculator.getDisplay()); // Output: 8

calculator.clear();
calculator.appendNumber('10');
calculator.setOperation('/');
calculator.appendNumber('2');
calculator.calculateResult();
console.log(calculator.getDisplay()); // Output: 5
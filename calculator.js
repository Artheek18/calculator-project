const rad_converter = Math.PI/180
let input1 = '';
let input2 = '';
let operator = '';
let isSecondInput = false;

function add(input1, input2){

    return input1 + input2

}

function subtract(input1, input2){

    return input1 - input2

}

function multiply(input1, input2){
    

    return input1 * input2

}

function divide(input1, input2){

    if (input2 === 0) {
        return NaN
    }

    return input1 / input2

}

function square(input1){

    return input1**2
}

function sqrt(input1){

    return Math.sqrt(input1);
}


function exponent(input1, input2){

    return input1**input2
}

function factorial(input1){
    if (!Number.isInteger(input1) || input1 < 0) {
        return NaN;
    }

    if(input1 == 0 || input1 == 1){
        return 1;
    }

    fact = 1
    for(let i = input1; i > 0; i--){
        fact = fact * i
        
    }

    return fact
}

function sin(input1){

    return Math.sin(input1*rad_converter)

}

function cos(input1){

    return Math.cos(input1*rad_converter)
    
}

function tan(input1){

    return Math.tan(input1*rad_converter)
    
}

function operate(input1, input2, operator){
    let result;

    switch(operator){
        case "+":
            result = add(input1, input2); break;
        case "-":
            result = subtract(input1, input2); break;
        case "*":
            result = multiply(input1, input2); break;
        case "/":
            result = divide(input1, input2); break;
        case "^":
            result = exponent(input1, input2); break;
        case "!":
            result = factorial(input1); break;
        case '^2':
            result = square(input1); break;
        case 'sqrt':
            result = sqrt(input1); break;
        case 'sin':
            result = sin(input1); break;
        case 'cos':
            result = cos(input1); break;
        case 'tan':
            result = tan(input1); break;
        default:
            return NaN;
    }
    

    return Math.round(result * 1e8) / 1e8;


}
function updateDisplay(value) {
    const display = document.querySelector('.display');
    display.value = value;
}

function clearCalculator() {
    input1 = '';
    input2 = '';
    operator = '';
    isSecondInput = false;
    updateDisplay('');
}

function display() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                clearCalculator();
                return;
            }

            if (value === '+/-') {
                if (!isSecondInput && input1 !== '') {
                    input1 = (parseFloat(input1) * -1).toString();
                    updateDisplay(input1);
                } else if (isSecondInput && input2 !== '') {
                    input2 = (parseFloat(input2) * -1).toString();
                    updateDisplay(input2);
                }
                return;
            }

            if (['sin', 'cos', 'tan', 'sqrt', '^2', '!'].includes(value)) {
                if (input1 !== '') {
                    const num = parseFloat(input1);
                    const result = operate(num, null, value);
                    updateDisplay(result);
                    input1 = result.toString();
                    input2 = '';
                    operator = '';
                    isSecondInput = false;
                }
                return;
            }

            if (value === '=') {
                if (input1 !== '' && operator !== '' && input2 !== '') {
                    const num1 = parseFloat(input1);
                    const num2 = parseFloat(input2);
                    const result = operate(num1, num2, operator);
                    updateDisplay(result);
                    input1 = result.toString();
                    input2 = '';
                    operator = '';
                    isSecondInput = false;
                }
                return;
            }

            if (['+', '-', '*', '/', '^'].includes(value)) {
                if (input1 !== '') {
                    operator = value;
                    isSecondInput = true;
                }
                return;
            }
            if (!isSecondInput) {
                input1 += value;
                updateDisplay(input1);
            } else {
                input2 += value;
                updateDisplay(input2);
            }
        });
    });
}

display();




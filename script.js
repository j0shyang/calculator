const display = document.querySelector('#display');
const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');
const percent = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const num1 = [];
const num2 = [];
let operatorClicked = false;

clear.addEventListener('click', (e) => {
    num1.splice(0, num1.length);
    num2.splice(0, num2.length);

    operatorClicked = false;

    display.textContent = 0;
})

// sign.addEventListener('click', (e) => {
//     display.textContent = e.target.value;
// })

// percent.addEventListener('click', (e) => {
//     display.textContent = e.target.value;
// })

// decimal.addEventListener('click', (e) => {
//     display.textContent = e.target.value;
// })

operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        if (!operatorClicked) {
            num1.push(e.target.value);

            display.textContent = +num1.join('');
            console.log("num1 -> " + num1);
        } else {
            num2.push(e.target.value);

            display.textContent = +num2.join('');
            console.log("num2 -> " + num2);
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let result = '';
        // let num3 = '';
        
        if (operatorClicked) {
            // num2.splice(0, num2.length);
            operatorClicked = false;
            // console.log("Flicker to " + false + " and move to num1");
        } else {
            // num1.splice(0, num1.length);
            operatorClicked = true;
            // console.log("Flicker to " + true + " and move to num2");
        }

        if (num1.length !== 0 && num2.length !== 0) {
            result = operate(num1, num2, e.target.value);
            display.textContent = result;

            num1.splice(0, num1.length);
            num2.splice(0, num2.length);

            // console.log("Result: " + result);
            // console.log("Clear num1");
            // console.log("Clear num2");
        }

        // console.log(num1.length);
        // String(result);
        // console.log(result.length);

        // if (num1.length !== 0 && result.length !== 0) {
        //     console.log("YO");
            
        //     result = operate(result, num1, e.target.value);
        //     console.log(result);
        //     display.textContent = result;
        // }

        // console.log(result)

        // if (e.target.value == "=") {
        //     display.textContent = result;
        //     console.log(result);
        // }
    });
});

function operate(num1, num2, operator) {
    num1 = +num1.join('');
    num2 = +num2.join('');

    switch (operator) {
        case '+':
            return add(num1, num2);
        // case '-':
        //     return subtract(num1, num2);
        // case '*':
        //     return multiply(num1, num2);
        // case '/':
        //     return divide(num1, num2);
        // case '%':
        //     return modulus(num1, num2);
        default:
            break;
    }
}

// const divide = (num1, num2) => num1 / num2;

// const multiply = (num1, num2) => num1 * num2;

// const subtract = (num1, num2) => num1 - num2;

const add = (num1, num2) => +num1 + +num2;

// const equals = () => display.textContent = result;

// const modulus = (num1, num2) => num1 % num2;

// const posNeg = (op) => {};

// const clear = () => {};
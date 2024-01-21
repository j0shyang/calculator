const topDisplay = document.querySelector('.top-display');
const bottomDisplay = document.querySelector('.bottom-display');
const clear = document.querySelector('.clear');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const sign = document.querySelector('.sign');
const decimal = document.querySelector('.decimal');
let firstInput = '';
let secondInput = '';
let currentResult = '';
let currentOperator = '';

clear.addEventListener('click', () => {
    firstInput = '';
    secondInput = '';
    currentResult = '';
    currentOperator = '';
    topDisplay.textContent = '';
    bottomDisplay.textContent = '0';
});

operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        if (currentOperator) {
            if (secondInput === '' && e.target.textContent === '0' && firstInput !== '0') {
                secondInput = e.target.textContent;
            } else if (secondInput !== '0') {
                secondInput += e.target.textContent;
            }
            bottomDisplay.textContent = secondInput;
        } else {
            if (firstInput === '0' && e.target.textContent === '0') {
                firstInput = e.target.textContent;
            } else if (firstInput !== '0') {
                firstInput += e.target.textContent;
            }
            bottomDisplay.textContent = firstInput;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (firstInput == '') {
            firstInput = '0';
            currentOperator = e.target.value;
            
            topDisplay.textContent = `${firstInput} ${currentOperator} `;
        } else if (e.target.value !== "=") {
            if (firstInput && secondInput && currentOperator) {
                firstInput = operate(firstInput, secondInput, currentOperator);

                secondInput = '';
            }
            currentOperator = e.target.value;

            topDisplay.textContent = `${firstInput} ${currentOperator} `;
            bottomDisplay.textContent = firstInput;
        } else {
            if (firstInput && currentOperator && secondInput) {
                currentResult = operate(firstInput, secondInput, currentOperator);

                bottomDisplay.textContent = currentResult;
                topDisplay.textContent = `${firstInput} ${currentOperator} ${secondInput} =`;
                
                firstInput = currentResult;
                secondInput = '';
                currentOperator = '';
            }
        }
    });
});

sign.addEventListener('click', (e) => {
    firstInput = firstInput.toString();

    if (firstInput === '') {
        return;
    }

    if (currentOperator !== '' && secondInput !== '') {
        if (!secondInput.includes('-')) {
            secondInput = '-' + secondInput;
        } else {
            secondInput = secondInput.replace('-', '');
        }
        bottomDisplay.textContent = secondInput;
    } else {
        if (!firstInput.includes('-')) {
            firstInput = '-' + firstInput;
        } else {
            firstInput = firstInput.replace('-', '');
        }
        bottomDisplay.textContent = firstInput;
    }
});

decimal.addEventListener('click', (e) => {
    firstInput = firstInput.toString();

    if (firstInput === '') {
        return;
    }

    if (currentOperator !== '' && secondInput !== '') {
        if (!secondInput.includes('.')) {
            secondInput = secondInput + '.';
        }
        bottomDisplay.textContent = secondInput;
    } else {
        if (!firstInput.includes('.')) {
            firstInput = firstInput + '.';
        }
        bottomDisplay.textContent = firstInput;
    }
});

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error';
            }
    }
}
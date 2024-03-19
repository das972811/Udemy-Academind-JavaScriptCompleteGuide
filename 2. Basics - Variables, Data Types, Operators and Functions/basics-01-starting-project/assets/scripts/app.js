const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;

    return result;
}

currentResult = add(5, 5);

currentResult += 10;

let calculationDescription = '0 + 10';

outputResult(currentResult, calculationDescription);


// Stop at 31
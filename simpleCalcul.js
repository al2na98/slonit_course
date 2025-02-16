function simpleCalculate(a, b, calculateFunc) {
    return calculateFunc(a, b);
}

const sum = function (a, b) {
    return (a + b);
}

const subtract = function (a, b) {
    return (a - b);
}

const divide = function (a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно!");
    }
    return (a / b);
}

const multiply = function (a, b) {
    return (a * b);
}

const operations = {
    sum: sum,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
}

const a = parseFloat(prompt("Введите первое число (a):"));
const b = parseFloat(prompt("Введите второе число (b):"));
const selectedOperation = prompt("Введите операцию (sum, substract, divide, multiply):");

if (operations[selectedOperation]) {
    const result = simpleCalculate(a, b, operations[selectedOperation]);
    console.log(`Результат: ${result}`);
} else {
    console.log("Некорректная операция. Выберите из sum, substract, divide, multiply.");
}

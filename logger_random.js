// Функция createLogger(), которая должна возвращать объект с методами:

// log(message): сохраняет сообщение в массив.
// getLogs(): выводит все сохраненные сообщения.
// Массив с сообщениями должен быть доступен только внутри замыкания. Посторонние функции не должны иметь прямого доступа к этому массиву.

function createLogger() {
    const messages = [];
    return {
        log(message) {
            messages.push(message); 
        },
        getLogs() {
            return messages;
        }
    };
}

const logger = createLogger();
logger.log("Сообщение 1");
logger.log("Сообщение 2");

console.log(logger.getLogs());


// Генератор случайных чисел из диапазона

// Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
// Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
// Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне.

function createRandomGenerator(min, max){
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const randomGenerator = createRandomGenerator(1, 10);
console.log(randomGenerator());



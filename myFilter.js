function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function sortAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

function sortDescending(array) {
    return array.slice().sort((a, b) => b - a);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, num => num % 2 === 0); 
const greaterThanThree = myFilter(numbers, num => num > 3);
const sortedAscending = sortAscending(numbers);
const sortedDescending = sortDescending(numbers);

console.log(evenNumbers); 
console.log(greaterThanThree); 
console.log(sortedAscending); 
console.log(sortedDescending); 
console.log(numbers); 

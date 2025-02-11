const comp1 = "Компьютер 1:";
const comp2 = "Компьютер 2:";

function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
}

const secretNumber = getRandomInt();
console.log(`${comp1} загадал число ${secretNumber}`);

function getGuess(num) {
    let first = 1;
    let last = 100;
    let found = false; 

    while (first <= last && !found) {
        const middle = Math.floor((first + last) / 2);
        console.log(`${comp2} Пробую число ${middle}`);

        if (middle === num) {
            console.log(`${comp2} Угадал! Это число ${middle}.`);
            found = true; 
        } else if (middle < num) {
            console.log(`${comp1} больше`);
            first = middle + 1; 
        } else {
            console.log(`${comp1} меньше`);
            last = middle - 1; 
        }
    }
}

getGuess(secretNumber);
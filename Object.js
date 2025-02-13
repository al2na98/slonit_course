//найти сумму всех ключей с числовыми значениями
const exampleObj = {
    a: 10,
    b: 'hello',
    c: 20,
    d: true,
    e: 5
};

function sumOfObj (){
    let sum = 0;
    for (let key in exampleObj) {
        if (typeof exampleObj[key] === "number"){
            sum += exampleObj[key];
        }
    }
    return sum;
} 

exampleObj.sumOfObj = sumOfObj;
console.log(exampleObj.sumOfObj()) 


//вернуть масиив ключей, значения котрых отсортированны от большего к меньшему
// Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].

const obj2 = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7,
};

function sortObjectValues () {
    let numericKeys = Object.entries(obj2).filter(entry => typeof entry[1] === "number");
            return numericKeys.sort((a, b) => b[1] - a[1]).map(entry => entry[0]);
    }

obj2.sortObjectValues = sortObjectValues;
console.log(obj2.sortObjectValues())

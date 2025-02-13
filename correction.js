//Замена первой буквы на заглавную
let name = prompt("Введите имя:");

function getName(){
    let firstLetter = name[0].toUpperCase();
    let letters = name.slice(1).toLowerCase();
    return (firstLetter + letters);
}
console.log(getName())


// замена длинной строки ..., обрезание только после спец. символов
let str = prompt("Введите длинную строку для сокращения: ");

function shortString () {
    if (str.length > 20){
        
        let cutOffIndex = 20;
        while (cutOffIndex > 0 && !/\s|[,.!?:;]/.test(str[cutOffIndex])) {
            cutOffIndex--;
        }

        if (cutOffIndex > 0) {
            return str.slice(0, cutOffIndex) + "...";
        } else {
            
            return str.slice(0, 20) + "...";
        }
    }
    return str; 
}
console.log(shortString())


// Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк (не важно какая) подстрокой другой строки. Если да, то возвращается true. В противном случае - false.
let str1 = prompt("Введите строку: ");
let str2 = prompt("Введите строку: ");

function getStringMatch (str1, str2){
    if (str1.indexOf(str2) != -1 || str2.indexOf(str1) != -1){
        return true;
    }
    return false;
}

console.log(getStringMatch(str1, str2));
// let arr = ["t", "e", "s", "t"];
// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

//mySlice(arr, [start], [end]);


function mySlice(arr, start,end) {
    let first = arr[start];
    let second = arr[end - 1];
    console.log(`${first},${second}`);
}
mySlice(["t", "e", "s", "t"], 1, 3);



// let fruits = ['Яблоко', 'Апельсин', 'Яблоко']
// alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')

//myIndexOf(arr, item, from)
function myIndexOf(arr, item, from) {
    if (from < 0){
        from = 0;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] == item)
        return i;
    }
    return -1;
    
}

console.log(myIndexOf(['Яблоко', 'Апельсин', 'Яблоко'], 'Яблоко', 1));

// let arr = [1, 0, false];
// alert( arr.includes(1) ); // true

//myIncludes(arr, item, from)
function myIncludes(arr, item, from) {
    if (from < 0){
        from = 0;
    }
    for (let i = from; i < arr.length; i++){
        if (arr[i] === item){
            return true;
        }
    }
        return false;
}
console.log(myIncludes([1, 0, false], false, 0))



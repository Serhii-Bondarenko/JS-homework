// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)');
function minNum(num1, num2, num3){
    let result;
    if(num1 < num2 && num1 < num3){
        result = num1;
    }else if (num2 < num1 && num2 < num3) {
        result = num2;
    } else{
        result = num3;
    }
    return result;
}
let minNumber = minNum(1, 2 , 3);
console.log(minNumber);
console.log('=========');
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)');
function maxNum(num1, num2, num3){
    let result;
    if(num1 > num2 && num1 > num3){
        result = num1;
    }else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else{
        result = num3;
    }
    return result;
}
let maxNumber = maxNum(1, 2 , 3);
console.log(maxNumber);
console.log('=========');
// - створити функцію яка повертає найбільше число з масиву
console.log('створити функцію яка повертає найбільше число з масиву');
let arr = [5, 10, 24, 323, 456, 23, 49 ];
function maxArray(array){
    let max = arr[0];
    for (const arrayElement of array) {
        if(arrayElement > max){
            max = arrayElement;
        }
    }
    return max;
}
console.log(maxArray(arr));
console.log('=============');

// - створити функцію яка повертає найменьше число з масиву
console.log('створити функцію яка повертає найменше число з масиву');
function minArray(array){
    let min = arr[0];
    for (const arrayElement of array) {
        if(arrayElement < min){
            min = arrayElement;
        }
    }
    return min;
}
console.log(minArray(arr));
console.log('=============');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його');
function sumArray(array){
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
console.log(sumArray(arr));
console.log('=============');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(' створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень');
function midValArray(array){
    let middleValue;
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    middleValue = sum / array.length;
    return Math.round(middleValue);
}
console.log(midValArray(arr));
console.log('=============');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minReturn(){
    let min = arguments[0];
    let max = arguments[0];
    for (const arg of arguments) {
        if (arg > max) {
            max = arg;
        }
        if (arg < min){
            min = arg;
        }
    }
    document.write(`<div>Найбільше число з обраних: ${max}</div>`);
    return min;
}
let min = minReturn(12, 321, 2, 45, -4, 46);
document.write(`<div>Найменше з обраних: ${min}</div>`);

// - створити функцію яка заповнює масив рандомними числами
console.log('створити функцію яка заповнює масив рандомними числами');
let emptyArr = [];
let emptyArr1 = [];
function pushRandomValue(array, length){
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random()*10));
    }
}
pushRandomValue(emptyArr1, 10);
pushRandomValue(emptyArr, 20);
console.log(emptyArr1);
console.log(emptyArr);
console.log('=============');

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log('створити функцію яка заповнює масив рандомними числами');
emptyArr = [];
emptyArr1 = [];
function  pushRandomValueLimit(array, length, limit){
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random()*limit));
    }
}
pushRandomValueLimit(emptyArr1, 5, 100);
pushRandomValueLimit(emptyArr, 15, 5);
console.log(emptyArr1);
console.log(emptyArr);
console.log('=============');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('Функція приймає масив та робить з нього новий масив в зворотньому порядку');
let newArr = [1, 2, 3];
let newArr1 = [10, 9 ,8 , 7, 6, 5, 4, 3 ,2 , 1]
console.log(newArr);
function reverse(array) {
    let out = [];
    for (let i = array.length - 1; i >= 0; i--) {
        out.push(array[i]);
    }
    return out;
}
console.log(reverse(newArr));
console.log(newArr1);
console.log(reverse(newArr1));
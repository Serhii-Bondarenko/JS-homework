// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)');

let minMaxNumber = (num1, num2, num3, callback) => callback(num1, num2, num3);

minMaxNumber(3, 4, 6, (num1, num2, num3) => {
    num1 < num2 && num1 < num3 ? console.log(num1) :
        num2 < num1 && num2 < num3 ? console.log(num2):
            num3 < num1 && num3 < num2 ? console.log(num3): console.log('Введені однакові числа');
})

console.log('====================');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)');

minMaxNumber(4, 6, 3, (num1, num2, num3) => {
    num1 > num2 && num1 > num3 ? console.log(num1) :
        num2 > num1 && num2 > num3 ? console.log(num2):
            num3 > num1 && num3 > num2 ? console.log(num3): console.log('Введені однакові числа');
})

console.log('===================');

// - створити функцію яка повертає найбільше число з масиву
console.log('створити функцію яка повертає найбільше число з масиву');
let numArray = [122, 133, 144, 55, 6, 777, 88];
console.log(numArray);
let arrayAction = (array, callback) => callback(array);

let maxNumArr = arrayAction(numArray, (array) => {
    let start = array[0];
    for (const item of array) {
        item > start ? start = item : start;
    }
    return start;
})
console.log(maxNumArr + ' ' + 'найбільше число массива');
console.log('==================');

// - створити функцію яка повертає найменьше число з масиву
console.log('створити функцію яка повертає найменьше число з масиву');

let minNumArr = arrayAction(numArray, (array) => {
    let start = array[0];
    for (const item of array) {
        item < start ? start = item : start;
    }
    return start;
})
console.log(minNumArr + ' ' + 'найменше число массива');
console.log('==================');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.');
numArray = [1, 2, 3, 4, 5];

let sumNumArr = arrayAction(numArray, (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
})

console.log(sumNumArr);
console.log('==================');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень');

let midValArr = arrayAction(numArray, (array)=>{
    let middleValue;
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    middleValue = sum / array.length;
    return Math.round(middleValue);
})

console.log(midValArr);
console.log('=======================');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minReturn = (...numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (const number of numbers) {
        number > max ? max = number : max;
        number < min ? min = number : min;
    }
    document.write(`<div>Найбільше число з обраних: ${max}</div>`);
    return min;
}
document.write(`<div>Найменше з обраних: ${minReturn(12, 321, 2, 45, -4, 46)}</div>`);

// - створити функцію яка заповнює масив рандомними числами
console.log('створити функцію яка заповнює масив рандомними числами');
let emptyArr = [];
let emptyArr1 = [];
let pushRandomValue = (array, length) => {
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
console.log('створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit');
emptyArr = [];
emptyArr1 = [];
let pushRandomValueLimit = (array, length, limit) => {
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
console.log(numArray);

let reverseArr = arrayAction(numArray, (array) => {
    let out = [];
    for (let i = array.length - 1; i >= 0; i--) {
       out.push(array[i]);
    }
    return out;
})

console.log(reverseArr);
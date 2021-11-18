// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
console.log('створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою');

function couple() {
    let out = '';
    let sum = 0;
    for (const argument of arguments) {
        if (typeof argument === 'number') {
            out = sum += argument;
        } else if (typeof argument === 'string'){
            out += argument + " ";
        }else {
            out = 'Спробуйте числа, або слова'
        }
    }
    return out;
}

let result = couple('я', 'люблю', 'okten');
console.log(result);
console.log('==================');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
console.log('створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив');

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

function sumIndex(array1, array2) {
    let out = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (i === j) {
                out.push(array1[i] + array2[j]);
            }
        }
    }
    return out;
}

let sumArrayIndex = sumIndex(arr1, arr2);
console.log(sumArrayIndex);
console.log('==============');
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
let users = [
    {
        id: 1,
        name: 'Толя',
        age: 23
    },
    {
        id: 2,
        name: 'Вася',
        age: 34
    },
    {
        id: 3,
        name: 'Вова',
        age: 46
    }
];

// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
console.log('Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів');

function keysArray(array) {
    let keyArr = [];
    for (const arrElement of array) {
        if (typeof arrElement === 'object') {
            for (const arrElementKey in arrElement) {
                keyArr.push(arrElementKey);
            }
        } else {
            keyArr = 'Массив має складатися з object()';
        }
    }
    return keyArr;
}

console.log(keysArray(users));

console.log('================');
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
console.log('Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів');

let boys = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];

function valueArray(array) {
    let valueArr = [];
    for (const arrElement of array) {
        if (typeof arrElement === 'object') {
            for (const arrElementKey in arrElement) {
                valueArr.push(arrElement[arrElementKey]);
            }
        } else {
            valueArr = 'Массив має складатися з object()';
        }
    }
    return valueArr;
}

console.log(valueArray(boys));
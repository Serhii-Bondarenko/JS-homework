// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
//
console.log('Cоздать функцию которая принимает число и возвращает  текст как в примере: 3275  —>  "3000 + 200 + 70 +5" ');

const number = 3275;
console.log(number);

let divideNum = (number) => {

    let arrOfNumber = number.toString().split('').map((num, index, array) => {

        return num * Math.pow(10, (array.length - index) - 1);
    });

    return arrOfNumber.join(' + ');
}


console.log(divideNum(number));

console.log('============================================================');
//
// ____________________________________________________________
//
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5

console.log('Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз');

const arr = [1, 2, 3, 4, 5, 2, 4, 1, 3];

function oddCountNum(array) {

    let oddNum = [];

    array.filter(number => number % 2 !== 0 ? oddNum.push(number) : false);

    return oddNum.length;
}

console.log(arr);
console.log(oddCountNum(arr));

console.log('============================================================');

//
// _____________________________________________________________
//
// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
console.log('Перевірити чи слово має в собі такі самі літери як і поеперднє слово');

//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

let anagramCheck = (str1, str2) => {

    if (str1.length === str2.length && typeof str1 === 'string' && typeof str2 === 'string') {

        let currentStr = str1.toLowerCase().split('').sort().join('');
        let nextStr = str2.toLowerCase().split('').sort().join('');

        return currentStr === nextStr;
    }
}

console.log(anagramCheck('GOOD', 'DOGO'));

console.log('============================================================');
//
// _______________________________________________________________
//
// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!

console.log('/ Точная степень двойки\n' +
    '// Дано натуральное число N.\n' +
    '//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.\n' +
    '//     Операцией возведения в степень пользоваться нельзя!');

let n = 4;

console.log(n);

let powCheck = (num) => {

    return Math.log2(num) % 1 === 0 ? "YES" : "NO";
}

console.log(powCheck(n));
//
console.log('============================================================');
//     ______________________________________________________________
//
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)

console.log(' Сумма цифр числа\n' +
    '// Дано натуральное число N. Вычислите сумму его цифр.\n' +
    '//     При решении этой задачи нельзя использовать строки,\n' +
    '//     списки, массивы ну и циклы, разумеется.\n' +
    '//     Рекурсія)');

console.log(1234);

function sumDigits(num) {

    if (num === 0) {
        return 0;

    } else {

        let lastDigit = num % 10;
        let newNum = Math.trunc(num / 10);
        return lastDigit + sumDigits(newNum);
    }
}

console.log(sumDigits(1234));
//

console.log('============================================================');

// ______________________________________________________________
//
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

console.log('Палиндром\n' +
    '// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.\n' +
    '//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.');

console.log('tenet');

let checkPalindrom = (str) => {

    return str === str.split('').reverse().join('') ? 'YES' : 'NO';
}

console.log(checkPalindrom('tenet'));

console.log('============================================================');

//
// _______________________________________________________________
//
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3

console.log('Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.\n' +
    '//\n' +
    '// 2176491947586100 -> 3');

let oneCounter = (strOfNum) => {

    let out = [];
    let tempArr = strOfNum.split('00');

    tempArr[0].split('').filter(num => num === '1' ? out.push(num) : false);
    return out.length;
}
//
console.log(oneCounter('21764919475861001'));

console.log('============================================================');

// _________________________________________________________________
//
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
//

console.log('Вирівняти багаторівневий масив в однорівневий\n' +
    '//     [1,3, [\'Hello, \'Wordd\', [9,6,1]], [\'oops\'], 9] -> [1, 3, \'Hello, \'Wordd\', 9, 6, 1, \'oops\', 9]');

const array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];

function funcRec(arr) {

    let out = [];

    for (const item of arr) {

        if (typeof item === 'object') {
            out = out.concat(funcRec(item));

        } else {
            out.push(item);

        }
    }

    return out;
}

console.log(funcRec(array));

console.log('============================================================');

//     ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88

console.log('Знайти набільший елемент в масиві за допомогою reduce');

const nums = [1, 6, 9, 0, 17, 88, 4, 7];

let maxNum = nums.reduce((prev, curr) => prev > curr ? prev : curr);

console.log(maxNum);
//
console.log('============================================================');

// ____________________________________________________________________
//
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.

console.log('Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел');

function largestPalindrome(num1, num2) {

    let out = [];

    function check(x, y) {

        return String(x * y) === String(x * y).split("").reverse().join("");

    }

    for (let i = 0; i < 999999; i++) {

        if (check(num1, num2)) {

            out.push(num1 * num2);
            num1--;
            num2 = num1 + 1;

        }

        num2--;
    }

    return out.sort((x, y) => y - x)[0];
}

console.log(largestPalindrome(99999, 10000));

console.log('============================================================');
//     ____________________________________________________________________
//
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let div = document.createElement('div');
document.body.appendChild(div);

let getTextForPrint = (str) => {

    let count = 0;
    let out = '';

    function typing() {

        let interval = setTimeout(() => {

            out += str[count];
            div.innerHTML = out;

            count++;

            if (count === str.length) {
                clearTimeout(interval);
                return true;
            }

            typing();

        }, Math.round(Math.random() * (1000 - 100 + 1) + 100));

    }

    typing();
}

getTextForPrint("Hello World");


// ==================================================================================

let p = document.createElement('p');
document.body.appendChild(p);

function typing(str) {

    let out = '';

    let type1 = (letter) => {

        return new Promise(resolve => {
            setTimeout(() => {
                out += str[letter];
                resolve(p.innerHTML = out);

            }, 600);

        });

    }

    let type2 = (letter) => {

        return new Promise(resolve => {
            setTimeout(() => {
                out += str[letter];
                resolve(p.innerHTML = out);

            }, 100);

        });

    }

    let type3 = (letter) => {

        return new Promise(resolve => {
            setTimeout(() => {
                out += str[letter];
                resolve(p.innerHTML = out);

            }, 300);

        });

    }

    let type4 = (letter) => {

        return new Promise(resolve => {
            setTimeout(() => {
                out += str[letter];
                resolve(p.innerHTML = out);

            }, 700);

        });

    }

    let type5 = (letter) => {

        return new Promise(resolve => {
            setTimeout(() => {
                out += str[letter];
                resolve(p.innerHTML = out);

            }, 1000);

        });

    }

    async function typingText() {
        await type1(0);
        await type2(1);
        await type3(2);
        await type4(3);
        await type5(4);
    }

    typingText();

}

typing("HELLO");

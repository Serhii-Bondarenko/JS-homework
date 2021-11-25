let borderFn = () => console.log('=============================');
// - Дано список імен.
let n1 = ' hArRy__poTTer_   ';
let n2 = '  Ron---wHis-ley  ';
let n3 = 'hermone__gra__nger   ';
let h4 = 'serhii...b...ondarenko'
let h5 = 'OKTEN.............meNtOR......   ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
console.log('Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його');

console.log(n1, n2, n3, h4, h5);
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let namesValidation = (...names) => {
    let symbols = ['.', '-', '_'];
    return names.map(currentName => {
        let name;
        let tempName;
        symbols.map(symbol => {
            tempName = currentName.trim().replace(symbol, ' ');
            if (tempName.includes(symbol)) {
                name = tempName.replaceAll(symbol, '').toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
            }
        })
        console.log(name);
    })
}

namesValidation(n1, n2, n3, h4, h5);

borderFn();
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.');

let randomNumArr = (length) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.round(Math.random() * 100));
    }
    return emptyArray;
}
let randomArray = (randomNumArr(10));
console.log(randomArray);
borderFn();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(' створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort');

let sortArr = randomArray.sort((num1, num2) => num1 - num2);
console.log(sortArr);

borderFn();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log('створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа');

let evenNumOfArr = randomArray.filter(num => num % 2 === 0);
console.log(evenNumOfArr);

borderFn();

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log('створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об\'єкти в масиві на стрінгові');

let numToString = randomArray.map(num => num.toString());
console.log(numToString);

borderFn();

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
console.log('створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.');

let nums = [11, 21, 3];
let nums1 = [23, 21, 12, 44];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log(nums, nums1);
console.log('--------------');

let sortNums = (direction, ...arrays) => {
    if (direction === 'ascending') {
        arrays.forEach(array => {
            console.log(array.sort((num1, num2) => num1 - num2));
        })
    } else if (direction === 'descending') {
        arrays.forEach(array => {
            console.log(array.sort((num1, num2) => num2 - num1));
        })
    } else {
        console.log('ascending - в порядку зростання, descending - в порядку спадання');
    }
}

sortNums('ascending', nums, nums1);
sortNums('descending', nums, nums1);
sortNums('qwerty', nums);

borderFn();
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log('відсортувати масив за спаданням за monthDuration');

let sortMonthDuration = coursesAndDurationArray.sort((currentObj, nextObj) => nextObj.monthDuration - currentObj.monthDuration);

console.log(sortMonthDuration);

borderFn();

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців');

let filterMonthDuration = coursesAndDurationArray.filter(obj => obj.monthDuration > 5);

console.log(filterMonthDuration);

borderFn();
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
console.log('Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов');
let cutString = (n, str) => {
    let out = [];
    for (let i = 0; i < str.length; i+=n) {
        out.push(str.substring(i, i + n));
    }
    return out;
}
console.log(cutString(3, 'конкатенация'));

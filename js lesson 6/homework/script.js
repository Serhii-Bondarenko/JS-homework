// - Знайти та вивести довижину настипних стрінгових значень
console.log('Знайти та вивести довижину настипних стрінгових значень');

let a = 'hello world';
console.log(a);
console.log(a.length);

console.log('-----------');

let b = 'lorem ipsum';
console.log(b);
console.log(b.length);

console.log('-----------');

console.log('javascript is cool');
console.log('javascript is cool'.length);

console.log('============================');

// - Перевести до великого регістру наступні стрінгові значення
console.log('Перевести до великого регістру наступні стрінгові значення');
let upCase = (...yourStr) => {
    yourStr.forEach( item => {
        console.log(item);
        console.log(item.toUpperCase());
        console.log('-------------------------');
    })
}

upCase('hello world', 'lorem ipsum', 'javascript is cool');

console.log('=========================');

// - Перевести до нижнього регістру настипні стрінгові значення
console.log('Перевести до нижнього регістру настипні стрінгові значення');

let lowCase = (...yourStr) => {
    yourStr.forEach(item => {
        console.log(item);
        console.log(item.toLowerCase());
        console.log('-------------------------');
    })
}

lowCase('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');

console.log('=========================');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('Є "брудна" стрінга let str = \' dirty string   \' . Почистити її від зайвих пробілів');

let str = ' dirty string   ';
console.log(str.trim());

console.log('===================');
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
console.log('Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів');

let str1 = 'Каждый охотник желает знать';
console.log(str1);

let stringToArray = (str) => str.split(' ');
console.log(stringToArray(str1)); // ['Каждый', 'охотник', 'желает', 'знать']
//
console.log('===================');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
console.log('Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів');

let str2 = 'Каждый охотник желает знать';
console.log(str2);

let delete_characters = (str, length) => str.slice(0, length);
console.log(delete_characters(str2, 7)); // Каждый
//
console.log('===================');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
console.log('Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр');
let str3 = "HTML JavaScript PHP";
console.log(str3);

let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
console.log(insert_dash(str3)); // 'HTML-JAVASCRIPT-PHP'
//
console.log('===================');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log('Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього' +
    ' регістру у верхній.');

let lowStr = 'learn git and gitHub without any code!'
console.log(lowStr);

let firstLetter = (str) => str[0].toUpperCase() + str.slice(1);
console.log(firstLetter(lowStr));

console.log('===================');
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log('Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери');

console.log(lowStr);

let capitalize = (str) => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(capitalize(lowStr));
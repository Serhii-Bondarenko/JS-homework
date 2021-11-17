// - створити функцію яка обчислює та повертає площу прямокутника висотою
alert('Визначаємо площу прямокутнка за формулою');
alert('Площа прямокутника рівна добутку його ширини на висоту.\n' +
    '\n' +
    'S=a*b.');
let width = +prompt('Введіть ширину прямокутника');
let height = +prompt('Введіть висоту прямокутника');
let action = prompt('Оберіть необхідну для обчислення дію ( * , / ,  + , - )');
function sq(action, width, height){
    let result;
    if (action === '*') {
        result  = width * height;
    }else {
        result = 'Спробуй помножити!';
    }
    return result;
}

let sSquare = sq( action, width, height);
confirm(`Площа прямокутника: ${sSquare}`);

// - створити функцію яка обчислює та повертає площу кола
console.log('Визначаємо площу круга');

function sc(r) {
    return 3.14 * Math.pow(r, 2);
}

let sCircle = sc(4);
console.log(sCircle);
console.log('================');

// - створити функцію яка обчислює та повертає площу циліндру
console.log('створити функцію яка обчислює та повертає площу циліндру');

function s(height, radius) {
    return 2 * 3.14 * radius * height;
}

let sBarrel = s(10, 5);
console.log(sBarrel);
console.log('================');

// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('створити функцію яка приймає масив та виводить кожен його елемент');
let numArr = [1, 2, 3, 4, 5, 6];
let strArr = ['sdasd', 'sdad', 'eqwewq'];

function array(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

array(numArr);
array(strArr);
console.log('================');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(text) {
    document.write(`<p>${text}</p>`);
}

par('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, iusto!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function countCheck(count){
//     return typeof count === 'number';
// }
function list2(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list2('Lorem ipsum dolor.', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mixArr = [123, 'dqeqw', NaN, undefined, true, 5 > 10, [], {}];

function arrayList(arr) {
    document.write(`<ul>`);
    for (const arrItem of arr) {
        document.write(`<li>${arrItem}</li>`);
    }
    document.write(`</ul>`);
}

arrayList(mixArr);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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

function object(array) {
    for (const arrElement of array) {
        document.write(`<div style="border: 1px solid black; display: flex; flex-direction: column;
                         align-items: center; max-width: 200px; border-radius: 10%; margin-bottom: 20px; padding: 20px;">
                            <div>#${arrElement['id']}</div>
                            <h2>Я ${arrElement['name']}</h2>
                            <p>мені ${arrElement['age']} років</p>
                        </div>`);
    }
}

object(users);
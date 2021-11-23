// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
console.log('створити функцію яка обчислює та повертає площу прямокутника висотою');
let sSquare = (width, height) => console.log(width * height);

sSquare(3, 5);
console.log('==============');

// - створити функцію яка обчислює та повертає площу кола
console.log('створити функцію яка обчислює та повертає площу кола');
let sCircle = (r) => console.log(Math.round(3.14 * r ** 2));

sCircle(7);
console.log('================');

// - створити функцію яка обчислює та повертає площу циліндру
console.log('створити функцію яка обчислює та повертає площу циліндру');
let sBarrel = (height, r) => console.log(Math.round(2 * 3.14 * r * height));

sBarrel(6, 4);
console.log('================');

// - створити функцію яка приймає масив та виводить кожен його елемент
let numArray = [1, 22, 33, 44, 55, 66];
console.log('створити функцію яка приймає масив та виводить кожен його елемент');
let outArray = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

outArray(numArray);
console.log('==============');

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let pTxt = (text) => document.write(`<p>${text}</p>`);
pTxt('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquid.');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let liTxt = (text) => {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

liTxt('Lorem ipsum dolor sit amet.');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulLi = (text, count) =>{
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ulLi('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, rem.', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mixArr = [123, 'dqeqw', NaN, undefined, true, 5 > 10, [], {}];

let listForArray = (array) => {
    document.write(`<ul>`);
    for (const arrayItem of array) {
        document.write(`<li>${arrayItem}</li>`);
    }
    document.write(`</ul>`);
}

listForArray(mixArr);
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

let outObject = (array) => {
    document.write(`<div style="display: flex; justify-content: space-around;">`)
    for (const arrElement of array) {
        document.write(`<div style="border: 1px solid black; display: flex; flex-direction: column;
                         align-items: center; margin-bottom: 20px; padding: 20px;">
                            <div>#${arrElement['id']}</div>
                            <h2>Я ${arrElement['name']}</h2>
                            <p>мені ${arrElement['age']} років</p>
                        </div>`);
    }
    document.write(`</div>`);
}

outObject(users);


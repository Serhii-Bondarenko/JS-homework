// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numArray = [1, 2, 3, 4, 5];
let strArray = ['a', 'b', 'c', 'd', 'k'];
let mixArray = ['str', NaN, 100, true, 4 > 5 ];
console.log(numArray);
console.log(strArray);
console.log(mixArray);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = [1, '2', 3===0];
emptyArray[1] = 'name';
emptyArray[2] = 23;
emptyArray[3] = null;
console.log(emptyArray);
console.log(emptyArray[0]);
console.log(emptyArray[1]);
console.log(emptyArray[2]);
console.log(emptyArray[3]);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i <= 10; i++){
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laudantium.</div>`);
}
document.write('<br>');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i <= 10; i++){
    document.write(`<div>Це блок номер ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 1;
while (i <= 20){
    document.write('<h2>Lorem ipsum dolor sit amet.</h2>')
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let p = 1;
while (p <= 20){
    document.write(`<h2>Я блок з циклу "while" за номером ${p}</h2>`)
    p++;
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numberArr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
for (let i = 0; i < numberArr.length; i++){
    console.log(numberArr[i]);
}
p = 0;
while (p < numberArr.length){
    document.write(`${numberArr[p]} `);
    p++;
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strArr = ['a', 'b', 'c', 'd', 'k', 'l', 'm', 'n', 'o', 'p'];
for (let i = 0; i < strArr.length; i++){
    console.log(strArr[i]);
}
document.write('<br>');
p = 0;
while (p < strArr.length){
    document.write(`${strArr[p]} `);
    p++;
}
document.write('<br>');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

mixArray = ['str', 'number', 100, true, 4 > 5, undefined, NaN, -2, '', null];
for (i = 0; i < mixArray.length; i++){
    console.log(mixArray[i]);
}
p = 0;
while (p < mixArray.length){
    document.write(`${mixArray[p]}_`);
    p++;
}
document.write('<br>');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

mixArray = ['str', 'number', 100, true, 4 > 5, undefined, NaN, -2, !!'', null];

for (i = 0; i < mixArray.length; i++){
    if (typeof mixArray[i] === 'boolean') {
        console.log(mixArray[i]);
    }
}
p = 0;
while (p < mixArray.length){
    if (typeof mixArray[p] === 'boolean') {
        document.write(`${mixArray[p]}_`);
    }
    p++;
}
document.write('<br>');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
mixArray = ['str', 'number', 100, true, 4 > 5, undefined, NaN, -2, !!'', null];
for (i = 0; i < mixArray.length; i++){
    if (typeof mixArray[i] === 'number') {
        console.log(mixArray[i]);
    }
}
p = 0;
while (p < mixArray.length){
    if (typeof mixArray[p] === 'number') {
        document.write(`${mixArray[p]}_`);
    }
    p++;
}
document.write('<br>');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
mixArray = ['str', 'number', 100, true, 4 > 5, undefined, NaN, -2, !!'', null];
for (i = 0; i < mixArray.length; i++){
    if (typeof mixArray[i] === 'string') {
        console.log(mixArray[i]);
    }
}
p = 0;
while (p < mixArray.length){
    if (typeof mixArray[p] === 'string') {
        document.write(`${mixArray[p]}_`);
    }
    p++;
}
document.write('<br>');
document.write('<br>');
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emp = [];
emp[0] = 123;
emp[1] = 'str';
emp[2] = undefined;
emp[3] = NaN;
emp[4] = {};
emp[5] = '';
emp[6] = 0;
emp[7] = 1 > 0;
emp[8] = 2*2 === 5;
emp[9] = null;
for (let i = 0; i < emp.length; i++){
    console.log(emp[i]);
}
p = 0;
while (p < emp.length){
   document.write(emp[p] + '<br>');
    p++;
}
document.write('<br>');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <=10; i++){
    console.log(i);
    document.write(i + ' ');
}

document.write('<br>');

p = 1;
while (p <= 10){
    console.log(p);
    document.write(p + ' ');
    p++;

}
document.write('<br>');
document.write('<br>');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <=100; i++){
    console.log(i);
    document.write(i + ' ');
}

document.write('<br>');
document.write('<br>');

p = 1;
while (p <= 100){
    console.log(p);
    document.write(p + ' ');
    p++;
}
document.write('<br>');
document.write('<br>');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <=100; i+=2){
    console.log(i);
    document.write(i + ' ');
}

document.write('<br>');
document.write('<br>');

p = 1;
while (p <= 100){
    console.log(p);
    document.write(p + ' ');
    p+=2;
}
document.write('<br>');
document.write('<br>');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// ПЕРШИЙ СПОСІБ
document.write('<p>Перший спосіб для парних чисел</p>');
for (let i = 2; i <=100; i+=2){
    console.log(i);
    document.write(i + ' ');
}

document.write('<br>');
document.write('<br>');

p = 2;
while (p <= 100){
    console.log(p);
    document.write(p + ' ');
    p+=2;
}
document.write('<br>');

document.write('<hr>');
document.write('<p>Другий спосіб для парних чисел</p>');
// ДРУГИЙ СПОСІБ
for (let i = 1; i <=100; i++){
    if (i%2===0) {
        console.log(i);
        document.write(i + ' ');
    }
}

document.write('<br>');
document.write('<br>');

p = 1;
while (p <= 100){
    if (p%2 === 0) {
        console.log(p);
        document.write(p + ' ');
    }
    p++;
}
document.write('<br>');
document.write('<br>');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// ПЕРШИЙ СПОСІБ
document.write('<p>Перший спосіб для непарних чисел</p>');
for (let i = 1; i <=100; i+=2){
    console.log(i);
    document.write(i + ' ');
}

document.write('<br>');
document.write('<br>');

p = 1;
while (p <= 100){
    console.log(p);
    document.write(p + ' ');
    p+=2;
}
document.write('<br>');

document.write('<hr>');
document.write('<p>Другий спосіб для непарних чисел</p>');
// ДРУГИЙ СПОСІБ
for (let i = 1; i <=100; i++){
    if (i%2!==0) {
        console.log(i);
        document.write(i + ' ');
    }
}

document.write('<br>');
document.write('<br>');

p = 1;
while (p <= 100){
    if (p%2 !== 0) {
        console.log(p);
        document.write(p + ' ');
    }
    p++;
}

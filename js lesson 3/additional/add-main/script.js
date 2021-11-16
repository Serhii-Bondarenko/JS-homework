// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}

for (let i = 1; i < arr.length; i++) {
    document.write(`<div><b>${arr[i]}</b>: #${i}</div>`);
}
document.write('<br>');

//     b. заповнити його 50 непарними числами за допомоги циклу.
arr = [];
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
for (let i = 0; i < arr.length; i++) {
    document.write(`<div><b>${arr[i]}</b>: #${i}</div>`);
}
document.write('<br>');

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
arr = [];
for (let i = 0; i <= 20; i++) {
    arr.push(Math.ceil(Math.random() * 100));
}
for (let i = 1; i < arr.length; i++) {
    document.write(`<div><b>${arr[i]}</b> я випадкове число #${i}</div>`);
}
document.write('<br>');

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
arr = [];
for (let i = 0; i <= 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8) + 8));
}
for (let i = 1; i < arr.length; i++) {
    document.write(`<div><b>${arr[i]}</b> я випадкове число #${i}</div>`);
}
document.write('<br>');

// 2. Вивести за допомогою console.log кожен третій елемен
console.log('Вивести за допомогою console.log кожен третій елемен');
for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}
console.log('=================');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.');
for (let i = 2; i < arr.length ; i+=3) {
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}
console.log('=================');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
for (let i = 2; i < arr.length ; i+=3) {
    if(arr[i]%2===0){
        newArr.push(arr[i]);
    }
}
console.log('Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий маси');
console.log(newArr);
console.log('=================');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('Вивести кожен елемент масиву, сусід справа якого є парним');
let ex = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < ex.length; i++) {
    if((ex[i]) % 2 === 0) {
        console.log(ex[i - 1]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let middleVal = [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < middleVal.length; i++) {
    sum += middleVal[i];
}
console.log('Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек');
console.log(sum/middleVal.length);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let random = [];
for (let i = 0; i < 20; i++) {
    random.push(Math.ceil(Math.random() * 100));
}
console.log('Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив');
console.log(random);
console.log('================');

let array = [];
for (let i = 0; i < random.length; i++) {
    array.push(random[i]*5);
}
console.log(array);
console.log('================');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mix = ['sreqwe', '', 23123, 23, 5+3===3, 45, ' ' ];
let numArr = [];
console.log('Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив');
console.log(mix);
for (let i = 0; i < mix.length ; i++) {
    if(typeof mix[i] === 'number' ){
        numArr.push(mix[i]);
    }
}
console.log(numArr);
console.log('====================');
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//         ]
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user['id'] === city['user_id']){
            user['address'] = city;
        }
    }
}
for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities.push(usersWithId[i]);
}
// usersWithCities.push(usersWithId);
console.log('З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id" .Записати цей об\'єкт в новий масив');
console.log(usersWithCities);

console.log('=======================');
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log(' Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
let numberArr = [1, 2 ,3 ,4, 5, 6 ,7 ,8, 9, 10];
for (let i = 0; i < numberArr.length ; i++) {
    if(numberArr[i]%2===0){
        console.log(numberArr[i]);
    }
}
console.log('===============');
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
numberArr = [1, 2 ,3 ,4, 5, 6 ,7 ,8, 9, 10];
let emptyArr = [];
console.log('Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
console.log(numberArr);
for (let i = 0; i < numberArr.length ; i++) {
    emptyArr.push(numberArr[i]);
}
console.log(emptyArr);
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let emptyStr = '';
let strArr = [ 'y', 'e', 's'];
for (let i = 0; i < strArr.length ; i++) {
    emptyStr += strArr[i];
}
document.write(emptyStr);
document.write('<br>');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let p = 0;
while (p < strArr.length){
    emptyStr += strArr[p];
    p++;
}
document.write(emptyStr);
document.write('<br>');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const string of strArr) {
    emptyStr += string;
}
document.write(emptyStr);

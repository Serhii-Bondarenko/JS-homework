// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let k = 1;
let l = 10;
let m = -999;
let n = 123;
const p = 3.14;
let o = 2.7;
let r = 16;
let s = false;
let t = true;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c, d);
// alert(k);
// alert(l);
console.log(k, l, m, o);
document.write(`${n} ${p}`);
document.write(' ' + r);
console.log(s);
console.log(t);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
a = 'hi';
b = 'okten';
c = 'ua';
d = 'com';
k = 15;
l = 9;
m = -1998;
n = 12345;
o = 0.5;
r = 15;
s = true;
t = false;
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c, d);
// alert(k);
// alert(l);
console.log(k, l, m, o);
document.write(`<h1> ${a} ${b} </h1>`);
document.write(' ' + s + '<br>');
console.log(p);
console.log(t);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Сергій';
let middleName = 'Дмитрович';
let lastName = 'Бондаренко';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('Your name:');
middleName = prompt('middle name:');
let age = prompt('age:');
console.log(`Вітаю ${name} ${middleName}. Тобі ${age} роки.`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(a1, b1, c1 );
console.log(typeof a1, b1, c1);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 != 10 -> false
// 10 !== 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let num = 5;

//205
// Відбувається конкатенація строк 20 і 5, томущо має перевагу над додаванням, тому число приймає значення string
// document.write(str + num + "<br/>");


// У всіх випадках нижче відбудеться математична операція і буде виведений її результат. Томущо, *, /, -, - математичні
// оператори, виконуються з числами і перетворюють операнди в числа, проте загальний результат дії буде типом
// даних - string.

//15
// document.write(str - num + "<br/>");

//40
// document.write(str * "2" + "<br/>");

//10
let test = str / 2 + "<br/>";
console.log(typeof test);
document.write(str / 2 + "<br/>");


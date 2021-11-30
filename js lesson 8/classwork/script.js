// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').classList.add('september_2021');

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkListElements = document.getElementsByClassName('linkList');
for (const linkListElement of linkListElements) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let txtOfListElement2 = document.querySelector('.listElement2').textContent;
console.log(txtOfListElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
for (const li of liList) {
    li.style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a');
for (const a of aList) {
    a.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const a of aList) {
    a.textContent === 'link3' ? a.style.fontSize = '40px' : false;
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const a of aList) {
    a.classList.toggle(`element_${a.textContent}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaders) {
    subHeader.style.backgroundColor = prompt('Оберіть колір ФОНУ (red, blue, green...)');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeader of subHeaders) {
    subHeader.textContent === 'content 2 segment' ? subHeader.style.color = prompt('Оберіть колір ТЕКСТУ (red, blue,' +
        ' green...)') : false;
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.querySelector('.content_1');
content1.innerHTML = prompt('Заповніть блок текстом');

// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2List = document.getElementsByClassName('text2');
for (const text2 of text2List) {
    text2.innerHTML = 'september 2021';
}
//

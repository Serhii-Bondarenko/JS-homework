//
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.write('<p>Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на' +
    ' кнопку исчезал элемент с id="text"<p/>');

let text = document.createElement('h3');
text.id = 'text';
text.innerText = 'display: none';
document.body.appendChild(text);

let h3 = document.getElementById('text');

h3.addEventListener('click', function () {
    h3.style.display = 'none';
})
//
document.write('<hr>');

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.write('<p>Создайте кнопку, при клике на которую, она будет скрывать сама себя</p>');

let hiddenBtn = document.createElement('button');
hiddenBtn.type = 'button';
hiddenBtn.classList.add('hiddenBtn');
hiddenBtn.style.padding = '10px';
hiddenBtn.innerText = 'hidden';
document.body.appendChild(hiddenBtn);

let button = document.querySelector('.hiddenBtn');

button.onclick = function () {
    button.hidden = true;
}

//
document.write('<hr>');

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.write('<p>створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку' +
    ' зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача</p>');

let ageFormCheck = document.createElement('form');
ageFormCheck.action = '/validationAge';
ageFormCheck.id = 'ageCheck';
let ageCheckInput = document.createElement('input');
ageCheckInput.name = 'age';
ageCheckInput.placeholder = 'Введіть свій вік';
let ageCheckBtn = document.createElement('button');
ageCheckBtn.innerText = 'check';
ageCheckBtn.id = 'btnCheck';

document.body.appendChild(ageFormCheck);
ageFormCheck.appendChild(ageCheckInput);
ageFormCheck.appendChild(ageCheckBtn);

let ageCheck = document.forms.ageCheck;

ageCheck.onsubmit = function (e) {
    e.preventDefault();
}
ageCheck.btnCheck.onclick = function () {
    if (!ageCheck.age.value) {
        alert('Скільки вам років?');
    } else if (+ageCheck.age.value < 18) {
        alert('Ты еще молод и глуп!');
    } else {
        alert('Приветсвую!');
    }
}

document.write('<hr>');

//
// - Создайте меню, которое раскрывается/сворачивается при клике
document.write('<p>Создайте меню, которое раскрывается/сворачивается при клике</p>');

let div = document.createElement('div');
div.id = 'box';
div.classList.add('menu');

let btn = document.createElement('button');
btn.innerText = 'Show menu';
btn.style.padding = '5px';
btn.classList.add('show');

let ul = document.createElement('ul');
for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.innerText = 'Lorem ipsum dolor sit amet.'
    ul.appendChild(li);
}

document.body.appendChild(div);
div.appendChild(btn);
div.appendChild(ul);
//

let menuElem = document.getElementById('box');
let showElem = document.querySelector('.show');

showElem.addEventListener('click', function () {
    menuElem.classList.toggle('dropdown');
})
//
document.write('<hr>');

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
document.write('Создать список комментариев , пример объекта коментария - {title : \'lorem\', body:\'lorem ipsum' +
    ' dolo sit ameti\'} Вывести список комментариев в документ, каждый в своем блоке  Добавьте каждому комментарию по кнопке для сворачивания его body');

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'Oleg', body: 'hello world'},
    {title: 'Ruslan', body: 'okten pokten'},
    {title: 'Ludmila', body: 'Ruslan moy'},
    {title: 'Arnold', body: 'Larisu Ivanovnu want'},
]
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentContainer = document.createElement('div');
commentContainer.classList.add('comments');

let commentsList = document.createElement('ul');
commentsList.classList.add('comment__list');

for (const item of comments) {
    let comment = document.createElement('li');
    comment.classList.add('comment__item');
    for (const key in item) {
        let h3 = document.createElement('h3');
        let btn = document.createElement('button');
        btn.style.padding = '5px';
        let p = document.createElement('p');
        if (key === 'title') {
            h3.innerHTML = item[key];
            comment.appendChild(h3);
        } else {
            p.innerHTML = item[key];
            btn.innerText = 'Collapse';
            comment.appendChild(btn);
            comment.appendChild(p);
        }
        btn.onclick = function () {
            p.classList.toggle('collapse');
        }
    }
    commentsList.appendChild(comment);
}

document.body.appendChild(commentContainer);
commentContainer.appendChild(commentsList);


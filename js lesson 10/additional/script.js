// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.write('Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:\n' +
    '//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.\n' +
    '//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина')

document.write('<br>');
document.write('<br>');

console.log('Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:\n' +
    '//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.\n' +
    '//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина');


// структура*
let mainDiv = document.createElement('div');
mainDiv.classList.add('father__div', 'main__div');
mainDiv.innerText = 'test';
mainDiv.style.display = 'flex';

mainDiv.style.flexWrap = 'wrap';

let ul = document.createElement('ul');
document.body.appendChild(mainDiv);

mainDiv.appendChild(ul);

for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    li.classList.add('item');
    li.id = 'item__' + i;
    li.innerText = 'Lorem ipsum dolor sit amet. ' + i;
    ul.appendChild(li);

}

document.addEventListener('click', function (e) {
    let tagName = e.target.tagName;
    let classList = e.target.classList.value.split(' ').join(', ');
    let id = e.target.id;
    let width = e.target.offsetWidth + 'px';
    let height = e.target.offsetHeight + 'px';
    console.log({tagName: tagName, classList: classList, id: id, width: width, height: height});
})

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<hr>');
document.write('<br>');

//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.addEventListener("click", function (e) {
    e.target.parentElement.style.position = 'relative';
    let infoList = document.createElement('ul');
    let tagName = e.target.tagName;
    let classList = e.target.classList.value.split(' ').join(', ');
    let id = e.target.id;
    let width = e.target.offsetWidth + 'px';
    let height = e.target.offsetHeight + 'px';
    let info = {tagName: tagName, classList: classList, id: id, width: width, height: height};
    for (const key in info) {
        let li = document.createElement('li');
        li.innerHTML = `${key}: ${info[key]}`;
        infoList.appendChild(li);
    }

    infoList.classList.add('popup');
    e.target.parentNode.insertBefore(infoList, e.target);

    let popupCollection = document.getElementsByClassName('popup');
    if (popupCollection.length > 1) {
        popupCollection[0].remove();
    }
})

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
//
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// Данные выводить в документ

let formFilter = document.forms.formFilter;
let demo = document.querySelector('.demo');

formFilter.onsubmit = function (e) {
    e.preventDefault();

    if (document.getElementsByClassName('user__item').length === 0) {
        function createDom(array) {
            for (const user of array) {
                let userItem = document.createElement('div');
                userItem.classList.add('user__item');
                demo.appendChild(userItem);
                for (const key in user) {
                    if (typeof user[key] !== 'object') {
                        let userInfo = document.createElement('div');
                        userInfo.innerHTML = `${key}: ${user[key]}`;
                        userItem.appendChild(userInfo);
                    } else {
                        let ul = document.createElement('ul');
                        ul.style.margin = '5px';
                        userItem.appendChild(ul);
                        for (const innerKey in user[key]) {
                            let userAddress = document.createElement('li');
                            userAddress.innerHTML = `${innerKey}: ${user[key][innerKey]}`;
                            ul.appendChild(userAddress);
                        }
                    }
                }
            }
        }
    } else {
        let clearField = document.querySelectorAll('.user__item');
        for (const userItem of clearField) {
            userItem.remove();
        }
    }

    usersWithAddress.filter(user => {
        let temp = [];
        if (formFilter.status.checked || formFilter.age.checked || formFilter.city.checked) {
            if (formFilter.status.checked && formFilter.age.checked && formFilter.city.checked) {
                !user.status && user.age >= 29 && user.address.city === 'Kyiv' ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.status.checked && formFilter.age.checked) {
                !user.status && user.age >= 29 ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.age.checked && formFilter.city.checked) {
                user.age >= 29 && user.address.city === 'Kyiv' ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.status.checked && formFilter.city.checked) {
                !user.status && user.address.city === 'Kyiv' ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.status.checked) {
                !user.status ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.age.checked) {
                user.age >= 29 ? temp.push(user) : false;
                createDom(temp);
            } else if (formFilter.city.checked) {
                user.address.city === 'Kyiv' ? temp.push(user) : false;
                createDom(temp);
            }
        } else {
            temp.push(user);
            createDom(temp);
        }
    })
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let sliderBox = document.createElement('div');
sliderBox.classList.add('slider__box');

let slider = document.createElement('div');
slider.classList.add('slider');

let sliderTrack = document.createElement('div');
sliderTrack.classList.add('slider__track');

document.body.appendChild(sliderBox);
sliderBox.appendChild(slider);
slider.appendChild(sliderTrack);


for (let i = 1; i <= 3; i++) {
    let slide = document.createElement('div');
    slide.classList.add('slider__item');
    let img = document.createElement('img');
    img.classList.add('img');
    img.id = 'img-' + i;
    slide.appendChild(img);
    sliderTrack.appendChild(slide);
}

let img1 = document.getElementById('img-1');
img1.classList.add('active__img');
img1.src = 'img/images.jpg';
let img2 = document.getElementById('img-2');
img2.src = 'img/images1.jpg';
let img3 = document.getElementById('img-3');
img3.src = 'img/images2.jpg';

let btnNext = document.createElement('button');
btnNext.innerText = 'Next';
btnNext.classList.add('btn__next');

let btnPrev = document.createElement('button');
btnPrev.innerText = 'Prev';
btnPrev.classList.add('btn__prev');

sliderBox.append(btnPrev, btnNext);

let current = 0;
let images = document.querySelectorAll('.img');

function carousel() {
    for (const image of images) {
        image.classList.add('transparent');
    }
    images[current].classList.remove('transparent');
}

carousel();

btnPrev.addEventListener('click', () => {
    current - 1 === -1 ? current = images.length - 1 : current--;
    carousel();
});

btnNext.addEventListener('click', () => {
    current + 1 === images.length ? current = 0 : current++;
    carousel();
})

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.addEventListener('mouseup', () => {
    if (window.getSelection().toString().length) {
        let selection = window.getSelection().getRangeAt(0);
        let selectedText = selection.extractContents();
        let span = document.createElement('span');
        span.style.backgroundColor = "yellow";
        span.style.zIndex = '0';
        span.style.fontWeight = "bold";
        span.appendChild(selectedText);
        selection.insertNode(span);
    }
})

document.write('<hr>');

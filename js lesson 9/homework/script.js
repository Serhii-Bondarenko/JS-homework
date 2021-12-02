// Все робити за допомоги js.
// - створити блок,
let divElement = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divElement.style.width = '300px';
divElement.style.height = '350px';
divElement.style.backgroundColor = 'tomato';
divElement.style.margin = '20px';

// - додати цей блок в body.
document.body.appendChild(divElement);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(divElement.cloneNode(true));

//
// - Є масив:
let a = ['Main', 'Products', 'About us', 'Contacts'];

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
let ul = document.querySelector('.menu');

// Завдання робити через цикли.

for (const item of a) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration

let courses = document.createElement('div');
courses.style.display = 'flex';
courses.style.flexWrap = 'wrap';
courses.style.rowGap = '10px';
courses.classList.add('courses');
document.body.appendChild(courses);

for (const item of coursesAndDurationArray) {
    let course = document.createElement('div');

    course.innerText = `Курс ${item.title} триватиме ${item.monthDuration} місяців`;
    
    course.style.textAlign = 'center';
    course.style.flex = '1 1 30%';

    courses.appendChild(course);
}

// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let course = document.createElement('div');
    course.classList.add('item');
    course.style.textAlign = 'center';
    course.style.flex = '1 1 30%';

    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = `${item.title}`

    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `тривалість: ${item.monthDuration} місяців`;

    courses.appendChild(course);
    course.appendChild(title);
    course.appendChild(description);
}
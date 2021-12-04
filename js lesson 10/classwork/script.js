// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
document.write('створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм')
//
for (let i = 1; i <= 2; i++) {

    let form = document.createElement('form');
    form.name = 'f' + i;
    form.action = '/someAction';
    form.id = 'f' + i;

    for (let i = 1; i <= 2; i++) {
        let input = document.createElement('input');
        input.name = 'in' + i;
        form.appendChild(input);
    }

    document.body.appendChild(form);
}
let btn = document.createElement('button');
btn.innerHTML = 'Console log input info';
btn.style.padding = '10px';
document.body.appendChild(btn);

btn.addEventListener('click', function () {
    console.log(document.forms.f1.in1.value);
    console.log(document.forms.f1.in2.value);
    console.log(document.forms.f2.in1.value);
    console.log(document.forms.f2.in2.value);
})

document.write('<hr>');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

document.write('Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.\n' +
    '//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом')
document.write('<br>');

for (let i = 1; i <= 3; i++) {
    let input = document.createElement('input');
    input.id = 'input' + i;
    document.body.appendChild(input);
}

let i1 = document.getElementById('input1');
i1.placeholder = 'amount of tr';
let i2 = document.getElementById('input2');
i2.placeholder = 'amount of td';
let i3 = document.getElementById('input3');
i3.placeholder = 'content';

let btnForTable = document.createElement('button');
btnForTable.innerHTML = 'Create a table';
btnForTable.style.padding = '10px';
document.body.appendChild(btnForTable);

btnForTable.addEventListener('click', function () {
    let tr = i1.value;
    let td = i2.value;
    let content = i3.value;

    let tableCreator = (tr, td, content) => {

        let table = document.createElement('table');
        table.style.background = 'grey';
        document.body.appendChild(table);

        for (let i = 0; i < tr; i++) {
            let trTag = document.createElement('tr');
            trTag.style.background = 'white';
            table.appendChild(trTag);

            for (let j = 0; j < td; j++) {
                let tdTag = document.createElement('td');
                tdTag.style.border = '1px solid grey';
                tdTag.style.padding = '10px';
                tdTag.innerHTML = content;
                trTag.appendChild(tdTag);
            }

        }

    }
    tableCreator(tr, td, content);
})
//
document.write('<hr>');
//
// - Сворити масив не цензцрних слів.
let filthyWords = ['сука', 'блять', 'піздєц', 'гімно', 'жопа', 'дебіл']; //як просили , сорі, аж самому незручно))

//     Сворити інпут текстового типу.

//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
document.write('Сворити інпут текстового типу, Якщо людина вводить слово і воно міститься в масиві не цензурних' +
    ' слів\n' +
    '// кинути алерт з попередженням.\n' +
    '//     Перевірку робити при натисканні на кнопку ')

let inputFilter = document.createElement('input');
inputFilter.id = 'inFilter';
inputFilter.type = 'text';
document.body.appendChild(inputFilter);

let btnCheck = document.createElement('button');
btnCheck.innerText = 'Check your word';
btnCheck.style.padding = '10px';

document.body.appendChild(btnCheck);

btnCheck.addEventListener('click', function () {
    let inputWord = inputFilter.value;
    for (let filthyWord of filthyWords) {
        if (filthyWord === inputWord) {
            alert('Використане нецензурне слово!');
            inputFilter.value = "";
            return;
        }
    }
})
//
document.write('<hr>');
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
document.write(' Потрібно перевіряти чи не містить ціле речення в собі погані слова.\n' +
    '//     Кинути алерт з попередженням у випадку якщо містить.\n' +
    '//     Перевірку робити при натисканні на кнопку');
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let inputFilterSentence = document.createElement('input');
inputFilterSentence.id = 'inFilterS';
inputFilterSentence.type = 'text';
document.body.appendChild(inputFilterSentence);

let btnCheckS = document.createElement('button');
btnCheckS.innerText = 'Check your sentence';
btnCheckS.style.backgroundColor = 'red';
btnCheckS.style.padding = '10px';

document.body.appendChild(btnCheckS);

btnCheckS.addEventListener('click', function () {
    let inputSentence = inputFilterSentence.value.toString().split(' ');
    for (let filthyWord of filthyWords) {
        for (const inputWord of inputSentence) {
            if (filthyWord === inputWord) {
                alert('Використане нецензурне слово!');
                inputFilter.value = "";
                return;
            }
        }
    }
})
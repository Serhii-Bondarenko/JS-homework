// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.round(Math.random()*59);
if (time <= 15) {
    document.write(`Зараз ${time} хвилини - це перша частина години`);
} else if (time <= 30) {
    document.write(`Зараз ${time} хвилини - це друга частина години`);
} else if (time <= 45) {
    document.write(`Зараз ${time} хвилини - це третя частина години`);
}else if (time <= 59) {
    document.write(`Зараз ${time} хвилини - це четверта частина години`);
}
document.write('<br>');
document.write('<br>');
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.ceil(Math.random()*31);
if (day <= 15) {
    document.write(`${day} число в першій декаді`);
} else {
    document.write(`${day} число в другій декаді`);
}
//
// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = !!'';
if (test === true) {
    document.write(`<p>Вірно</p>`);
} else {
    document.write(`<p>Неправильно</p>`);
}

test  = !!' ' ? 'Вірно' : 'Неправильно';
console.log(test);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
if (a !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}
a !== 0 ? console.log('Вірно') :  console.log('Невірно');
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let schedule = +prompt('Який сьогодні день по порядку від 1 до 7 ? ');
switch (schedule){
    case 1:
        confirm('Понеділок: Сходити на роботу ');
        break;
    case 2:
        confirm('Вівторок: звільнитись з роботи ');
        break;
    case 3:
        confirm('Середа: завести аккаунт на work.ua ');
        break;
    case 4:
        confirm('Четверг: знайти улюблену справу і більше ніколи "не працювати" ');
        break;
    case 5:
        confirm('П\'ятниця: перше занняття в Okten school ');
        break;
    case 6:
        confirm('Субота: improve in English ');
        break;
    case 7:
        confirm('Неділя: відпочити та підготуватись до наступного тижня ');
        break;
    default:
        alert('Безумие — это точное повторение одного и того же действия раз за разом в надежде на изменение')
}
//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Який рік цікавить?');
if (year%4===0 ) {
    console.log(`${year} - високоскний рік`);
} else {
    console.log(`${year} - не високоскний рік`);
}
(+prompt('Який рік цікавить?') % 4 === 0) ? console.log(`Високоскний рік`) : console.log(`Не високоскний рік`);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let question = prompt('Яка «офіційна» назва JavaScript?');
if (question === 'ECMAScript') {
    document.write('<h3> Правильно! </h3>');
} else {
    document.write('<h3> Не знаєте? ECMAScript! </h3>');
}
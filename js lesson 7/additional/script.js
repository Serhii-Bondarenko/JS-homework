// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
console.log('Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об\'єктів');
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class User {
    constructor(id, username, email, address, phone, website, company) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

function Address(street, suite, city, zipcode, lat, lng) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = {
        lat: lat,
        lng: lng
    }
}

function Company(companyName, catchPhrase, bs) {
    this.companyName = companyName;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}

let user1 = new User(1, 'Leanne Graham', 'Sincere@april.biz',
    new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496'),
    '1-770-736-8031 x56442', 'hildegard.org',
    new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'))
console.log(user1);

console.log('===================================');
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
console.log('Створити функцію конструктор / клас  який описує об\'єкт тегу');
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
class Tag {
    constructor(tagName, action, ...attributes) {
        this.tagName = tagName;
        this.action = action;
        this.atributes = attributes;
    }
}

//
function Attribute(attributeName, attributeAction) {
    this.attributeName = attributeName;
    this.attributeAction = attributeAction;
}

// Таким чином описати теги
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// -a
let a = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
    new Attribute('href', 'Задает адрес документа, на который следует перейти'),
    new Attribute('name', 'Устанавливает имя якоря внутри документа'));

console.log(a);

console.log('-----------------');

// -div
let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    new Attribute('align', 'Задает выравнивание содержимого тега <div>'),
    new Attribute('title', 'Добавляет всплывающую подсказку к содержимому'));

console.log(div);

console.log('-----------------');

// -h1
let h1 = new Tag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня',
    new Attribute('align', 'Определяет выравнивание заголовка'),
    new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'));

console.log(h1);

console.log('----------------------');

// -span
let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа',
    new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS'),
    new Attribute('title', 'Описывает содержимое элемента в виде всплывающей подсказки'),
    new Attribute('hidden', 'Скрывает содержимое элемента от просмотра'));

console.log(span);

console.log('----------------------');

// -input
let input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать' +
    ' разные элементы интерфейса',
    new Attribute('checked', 'Предварительно активированный переключатель или флажок'),
    new Attribute('form', 'Связывает поле с формой по её идентификатору'),
    new Attribute('placeholder', 'Выводит подсказывающий текст'));

console.log(input);

console.log('----------------------');

// -form
let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице',
    new Attribute('action', 'Адрес программы или документа, который обрабатывает данные формы'),
    new Attribute('method', 'Метод протокола HTTP'));

console.log(form);

console.log('----------------------');

// -option
let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    new Attribute('label', 'Указание метки пункта списка'),
    new Attribute('selected', 'Заранее устанавливает определенный пункт списка выделенным'));

console.log(option);

console.log('----------------------');

// -select
let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    new Attribute('required', 'Список обязателен для выбора перед отправкой формы'),
    new Attribute('disabled', 'Блокирует доступ и изменение элемента'));

console.log(option);

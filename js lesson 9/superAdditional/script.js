let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
console.log('З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив');
let searchAddress = (array) => {
    array = [];
    for (const user of users) {
        for (const userKey in user) {
            userKey === 'address' ? array.push(user[userKey]) : false;
        }
    }
    return array;
}

console.log(searchAddress([]));

console.log('========================================');

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let usersList = document.createElement('div');
document.body.appendChild(usersList);

for (const user of users) {
    let userItem = document.createElement('div');
    userItem.classList.add('user__item');
    userItem.innerHTML = `name: ${user.name}  <br> age: ${user.age} <br> status: ${user.status}`;
    usersList.appendChild(userItem);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let newUsersList = document.createElement('div');
document.body.appendChild(newUsersList);
newUsersList.classList.add('new__user_list');

for (const user of users) {
    let userItem = document.createElement('div');
    userItem.classList.add('new__user');
    for (const key in user) {
        let userInfo = document.createElement('div');
        userInfo.classList.add('user__info');
        if (typeof user[key] !== 'object') {
            userInfo.innerHTML = `${key}: ${user[key]}`;
            userItem.appendChild(userInfo);
        } else {
            for (const innerKey in user[key]) {
                let address = document.createElement('div');
                address.classList.add('new__user_address');
                address.innerHTML = `${innerKey}: ${user[key][innerKey]}`;
                userItem.appendChild(address);
            }
        }
    }
    newUsersList.appendChild(userItem);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let userItem = document.createElement('div');
    userItem.classList.add('new__user_with_block_address');

    let userItemAddress = document.createElement('ul');
    userItemAddress.classList.add('address__block');

    for (const key in user) {
        let userInfo = document.createElement('div');
        userInfo.classList.add('user__info');
        if (typeof user[key] !== 'object') {
            userInfo.innerHTML = `${key}: ${user[key]}`;
            userItem.appendChild(userInfo);
        } else {
            for (const innerKey in user[key]) {
                let address = document.createElement('li');
                address.classList.add('new__user_address');
                address.innerHTML = `${innerKey}: ${user[key][innerKey]}`;
                userItemAddress.appendChild(address);
            }
        }
    }
    newUsersList.appendChild(userItem);
    userItem.appendChild(userItemAddress);
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let content = document.getElementById('content');
let titles = document.getElementsByTagName('h2');
let titleList = document.createElement('ul');
titleList.classList.add('title__list');
content.appendChild(titleList);
for (const title of titles) {
    let titleItem = document.createElement('li');
    titleItem.classList.add('title__item');
    titleItem.innerHTML = title.innerText;
    titleList.appendChild(titleItem);
}

//
//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let rulesBlock = document.createElement('div');
rulesBlock.classList.add('rules__container');
document.body.appendChild(rulesBlock);
let i = 1;
for (const rule of rules) {
    let rules = document.createElement('div');
    rules.classList.add('rules', 'rule' + i);
    i++;
    for (const key in rule) {
        let caption = document.createElement('h2');
        let txt = document.createElement('p');
        if (key === 'title') {
            caption.innerText = rule[key];
            rules.appendChild(caption);
        } else {
            txt.innerText = rule[key];
            rules.appendChild(txt);
        }
    }
    rulesBlock.appendChild(rules);
}
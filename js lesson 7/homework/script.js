let borderFn = () => console.log('==============');
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
console.log('Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone');

function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surame = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'kokos', 'palmolive', 'moyNejniyGel@owu.com', '+3809909310');
console.log(user1);

borderFn();

// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('створити пустий масив, наповнити його 10 об\'єктами new User');

let users = [];
for (let i = 1; i <= 10; i++) {
    users.push(new User(i, `user ${i}`, `surname ${i}`, `email ${i}`, `+000000${i - 1}`));
}
users.sort(() => Math.random() - 0.5);
console.log(users);

borderFn();
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об\'єкти з парними id (filter)');

console.log(users.filter(obj => obj.id % 2 === 0));

borderFn();

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)');
//                          РОЗКОМЕНТУЙТЕ
// console.log(users.sort((objC, objN) => objC.id - objN.id));

borderFn();

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
console.log('створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)');

class Client {
    constructor(id, clientName, surname, email, phone, order) {
        this.id = id;
        this.clientName = clientName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1, 'Dima', 'Karton', 'gordiy@azino777.com', '+3809909310', ['karton in chocolate', 'bird' +
' milk', 'suffle']);
console.log(client1);

borderFn();

// створити пустий масив, наповнити його 10 об'єктами Client
console.log('створити пустий масив, наповнити його 10 об\'єктами Client');

let clients = [
    new Client(6, 'Dima', 'Karton', 'gordiy@azino777.com', '+3809909310', ['karton in chocolate', 'bird milk', 'suffle']),
    new Client(10, 'Oleg', 'Blondin', 'budemRazbyratsa@gmail.com', '+380823812', ['belyash']),
    new Client(8, 'Kolya', 'Eroshenko', 'sexSymbol@zrada.ua', '+546543123', ['protein', 'unahi maki', 'espresso']),
    new Client(3, 'Hector', 'Ura', 'masterShief@ukr.net', '+3465661230', ['kyiv pie', 'spices']),
    new Client(5, 'Volodymyr', 'Svechko', 'ironPunch@gmail.com', '+3864560021', ['rice', 'chiken', 'eggs', 'milk']),
    new Client(25, 'Artem', 'Milkevskiy', 'artemOleksandrovich@mail.ru', '+388975102', ['vodka', 'viski', 'beer', 'revo', 'shivchik']),
    new Client(4, 'Serhii', 'Kupka', 'jumpToSky@gmail.com', '+3804562121', ['jelly']),
    new Client(7, 'Ehor', 'Cupkic', 'boss@yandex.ru', '+38095444654', ['Oleh Blondin', 'Artem Milkevskiy', 'Dima' +
    ' Karton']),
    new Client(1, 'Vova', 'Green', 'stadion@ukr.net', '+380********', ['lapsha']),
    new Client(12, 'Tolik', 'Sharik', 'ruWorld@mail.ru', '+3809946545', ['solyanka', 'okroshka']),
]

console.log(clients);

borderFn();

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню');

console.log(clients.sort((objC, objN) => objC.order.length - objN.order.length));


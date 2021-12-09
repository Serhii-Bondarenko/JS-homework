// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let userList = document.createElement('div');
userList.classList.add('user__list');
document.body.appendChild(userList);

let hrefToFavorite = document.createElement('h4');
hrefToFavorite.style.cursor = 'pointer';
hrefToFavorite.innerText = "Перейти в избранные";
hrefToFavorite.onclick = () => {
    location.href = 'favorites.html';
}
userList.appendChild(hrefToFavorite);

let favoritesKey = 'favorites';

let i = 1;
users.forEach(item => {
    let userItem = document.createElement('div');
    userItem.style.border = '1px solid black';
    userItem.style.borderRadius = '10px';
    userItem.style.padding = '10px';
    userItem.style.marginBottom = '10px';
    userItem.style.width = 'fit-content';
    userItem.classList.add('user__item');
    userItem.id = 'user__' + i;
    i++;

    let userInfo = document.createElement('p');
    userInfo.innerHTML = JSON.stringify(item);

    let btn = document.createElement('button');
    btn.innerHTML = 'Избраное';

    btn.addEventListener('click', () => {
        let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
        favorites.push(item);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    })

    userList.appendChild(userItem);
    userItem.append(userInfo, btn);
})

// localStorage.clear();
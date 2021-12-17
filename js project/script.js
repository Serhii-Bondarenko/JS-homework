// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

let key = 'users';
let usersList = document.querySelector('.users__list');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        users.forEach(item => {

            let user = document.createElement('div');
            user.classList.add('user');

            let id = document.createElement("p");
            id.textContent = 'id: ' + item.id;

            let userName = document.createElement('p');
            userName.textContent = item.name;

            const link = document.createElement('a');
            link.href = 'details/user_details.html?id=' + item.id;
            link.target = '_blank';
            link.textContent = 'Інформація';

            link.addEventListener('click', () => {
                let users = JSON.parse(localStorage.getItem(key)) || [];
                let duplicate = users.find(user => user.id === item.id);
                if (!users.includes(duplicate)) {
                    users.push(item);
                }
                localStorage.setItem(key, JSON.stringify(users));
            })

            usersList.appendChild(user);
            user.append(id, userName, link);
        })
    })


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//

let users = JSON.parse(localStorage.getItem('users'));
let userInfo = document.getElementsByClassName('user__info')[0];

let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');

let pageTitle = document.getElementsByTagName('title')[0];
let currentUser = users.find(user => user.id == idOfUser);
pageTitle.textContent = currentUser.name;

let renderUserInfo = (user) => {

    let userContacts = document.createElement('ul');
    userContacts.classList.add('user__contacts');

    let userCompany = document.createElement('ul');
    userCompany.classList.add('user__company');

    for (const key in user) {

        if (typeof user[key] !== 'object') {

            if (key === 'name') {
                let name = document.createElement('h3');
                name.textContent = user[key];
                userInfo.appendChild(name);

            } else if (key === 'username') {
                let userName = document.createElement('h4');
                userName.textContent = `${key}: ${user[key]}`;
                userInfo.appendChild(userName);

            } else if (key === 'email' || key === 'phone' || key === 'website') {
                let li = document.createElement('li');
                li.textContent = `${key}: ${user[key]}`;
                userContacts.appendChild(li);
                userInfo.appendChild(userContacts);

            } else if (key === 'catchPhrase' || key === 'bs') {
                let li = document.createElement('li');
                li.textContent = `${key}: ${user[key]}`;
                userCompany.appendChild(li);
                userInfo.appendChild(userCompany);

            } else {
                let p = document.createElement('p');
                p.innerHTML = `${key}: ${user[key]}`;
                userInfo.appendChild(p);
            }
        } else {
            renderUserInfo(user[key]);
        }
    }
}

renderUserInfo(currentUser);

let wrapper = document.getElementsByClassName('wrapper')[0];

let btnPostInfo = document.createElement('button');
btnPostInfo.textContent = 'Пости користувача ' + currentUser.name;
wrapper.appendChild(btnPostInfo);

let userPosts = document.getElementsByClassName('user__posts')[0];

fetch('https://jsonplaceholder.typicode.com/users/' + currentUser.id + '/posts')
    .then(response => response.json())
    .then(posts => {

        posts.forEach(post => {

            let postItem = document.createElement('div');
            postItem.classList.add('post__item', 'item');

            let title = document.createElement('h3');
            title.innerText = post.title;

            let postLink = document.createElement('a');
            postLink.href = '../post_details/post_details.html?data=' + JSON.stringify(post);
            postLink.textContent = 'Детальніше';

            postItem.append(title, postLink);
            userPosts.appendChild(postItem);

        })
    })

btnPostInfo.onclick = () => {
    userPosts.classList.toggle('active');
}
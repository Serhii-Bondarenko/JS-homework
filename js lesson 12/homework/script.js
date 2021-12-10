// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsList = document.getElementsByClassName('list')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        posts.forEach(post => {

            let postItem = document.createElement('div');
            postItem.classList.add('item');
            postItem.id = 'post-' + post.id;

            let idList = document.createElement('ul');
            idList.classList.add('id__list');

            let id = document.createElement('li');
            id.innerText = 'id: ' + post.id;

            let userId = document.createElement('li');
            userId.innerText = 'user id: ' + post.userId;

            let title = document.createElement('h3');
            title.classList.add('name');
            title.innerText = post.title;

            let body = document.createElement('p');
            body.classList.add('body');
            body.innerText = post.body;

            postsList.appendChild(postItem);
            postItem.appendChild(idList);
            idList.appendChild(id);
            idList.appendChild(userId);
            postItem.appendChild(title);
            postItem.appendChild(body);

        })
    })

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsList = document.getElementsByClassName('list')[1];
console.log(commentsList);
fetch(' https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
            comments.forEach(comment => {
                let commentItem = document.createElement('div');
                commentItem.classList.add('item');
                commentItem.id = 'comment- ' + comment.id;

                let idCommentList = document.createElement('ul');
                idCommentList.classList.add('id__list');

                let commentId = document.createElement('li');
                commentId.innerText = 'id: ' + comment.id;

                let postId = document.createElement('li');
                postId.innerText = 'post id: ' + comment.postId;

                let name = document.createElement('h3');
                name.classList.add('name');
                name.innerText = comment.name;

                let eMail = document.createElement('p');
                eMail.classList.add('eMail');
                eMail.innerText = 'e-mail: ' + comment.email;

                let commentBody = document.createElement('p');
                commentBody.classList.add('body');
                commentBody.innerText = comment.body;

                commentsList.appendChild(commentItem);
                commentItem.appendChild(idCommentList);
                idCommentList.appendChild(commentId);
                idCommentList.appendChild(postId);
                commentItem.appendChild(name);
                commentItem.appendChild(eMail);
                commentItem.appendChild(commentBody);
            })
    })
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let userList = document.querySelector('.users__list');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {

            let userItem = document.createElement('div');
            userItem.classList.add('user__item', 'item');
            userList.appendChild(userItem);

            let userInfo = document.createElement('ul');
            userInfo.classList.add('user__info');

            let userPosts = document.createElement('div');
            userPosts.classList.add('user__posts', 'list');

            let btnPosts = document.createElement('button');
            btnPosts.classList.add('btn');
            btnPosts.textContent = 'Show user posts';

            let rec = (user) => {
                for (const key in user) {
                    if (typeof user[key] !== 'object') {
                        let li = document.createElement('li');
                        li.innerHTML = `${key}: ${user[key]}`;
                        userInfo.appendChild(li);
                    } else {
                        rec(user[key]);
                    }
                }
            }

            rec(user);

            userItem.append(userInfo, userPosts, btnPosts);

            btnPosts.addEventListener('click', () => {
                userItem.classList.toggle('showPost');
                userPosts.classList.toggle('active');
            })

            fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                .then(response => response.json())
                .then(posts => {
                    posts.forEach(post => {

                        if (user.id === post.userId) {

                            let postItem = document.createElement('div');
                            postItem.classList.add('post__item', 'item');
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

                            let btnComments = document.createElement('button');
                            btnComments.classList.add('btn');
                            btnComments.textContent = 'Show comments';

                            let userComments = document.createElement('div');
                            userComments.classList.add('user__comments', 'list');

                            userPosts.appendChild(postItem);
                            postItem.append(idList, btnComments, title, body, userComments);
                            idList.append(id, userId)

                            btnComments.addEventListener('click', () => {
                                postItem.classList.toggle('showComment');
                                userComments.classList.toggle('active');
                            })

                            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                .then(response => response.json())
                                .then(comments => {
                                    comments.forEach(comment => {

                                        if (post.id === comment.postId) {

                                            let commentItem = document.createElement('div');
                                            commentItem.classList.add('item', 'comment__item');
                                            commentItem.id = 'comment-' + comment.id;

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

                                            userComments.appendChild(commentItem);
                                            commentItem.append(idCommentList, name, eMail, commentBody);
                                            idCommentList.append(commentId, postId);
                                        }
                                    })

                                })
                        }
                    })
                })
        })
    })
    
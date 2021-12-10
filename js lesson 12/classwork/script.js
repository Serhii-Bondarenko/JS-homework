// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsList = document.querySelector('.list');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            let postItem = document.createElement('div');
            postItem.classList.add('item', 'relative');
            postItem.id = 'post-' + post.id;

            let idList = document.createElement('ul');
            idList.classList.add('id__list');

            let id = document.createElement('li');
            id.innerText = 'id: ' + post.id;

            let userId = document.createElement('li');
            userId.innerText = 'user id: ' + post.userId;

            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.textContent = 'Show comments';
            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        comments.forEach(comment => {

                            if (post.id === comment.id) {
                                let commentItem = document.createElement('div');
                                commentItem.classList.add('item', 'popup');
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


                                if (document.getElementsByClassName('popup').length !== 0) {
                                    document.getElementsByClassName('popup')[0].remove();
                                }else {
                                    postItem.appendChild(commentItem);
                                }
                                commentItem.appendChild(idCommentList);
                                idCommentList.appendChild(commentId);
                                idCommentList.appendChild(postId);
                                commentItem.appendChild(name);
                                commentItem.appendChild(eMail);
                                commentItem.appendChild(commentBody);

                            }
                        })
                    })
            }

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
            postItem.appendChild(btn);
            postItem.appendChild(title);
            postItem.appendChild(body);
        })
    })
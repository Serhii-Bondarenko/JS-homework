// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let currentPost = JSON.parse(url.searchParams.get('data'));

let pageTitle = document.getElementsByTagName('title')[0];
pageTitle.textContent = currentPost.title;

let postInfo = document.getElementsByClassName('post__info')[0];

let renderPostInfo = (post) => {

    let postItem = document.createElement('div');
    postItem.classList.add('post__item', 'item');

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

    let userComments = document.createElement('div');
    userComments.classList.add('user__comments');

    postItem.append(idList, title, body)
    idList.append(id, userId)
    postInfo.append(postItem, userComments);

    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(response => response.json())
        .then(comments => {
            comments.forEach(comment => {

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
            })

        })
}

renderPostInfo(currentPost);


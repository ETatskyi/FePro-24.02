window.onload = () => {
    fillSelector(100);
    let getButton = document.querySelector('#button')
    let selector = document.querySelector('#selector');
    let content = document.querySelector('#content');

    getButton.addEventListener('click', getData);
}

function fillSelector(num) {
    for (let i = 0; i < num; i++) {
        let opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerText = i + 1;
        selector.append(opt);
    }
}

async function getData() {
    // try used to show post without internet

    try {
        let post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${selector.value}`))
            .json();
        let user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`))
            .json();
        let comment = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${selector.value}/comments`))
        .json();

        showPost(post, user, comment);

    } catch (err) {
        showPost(POST, USER, COMMENTS);
        alert(`cant get info. check your connection first\nexample of post will be shown`);
    }
}

function showPost(p, u, c) {
    let post = document.createElement('p');
    let title = document.createElement('h3');
    let body = document.createElement('div');
    let user = document.createElement('div');

    user.setAttribute('class', 'user')
    user.setAttribute('class', 'user')

    post.append(title);
    post.append(body);
    post.append(user);

    content.prepend(post);

    title.innerText = p.title;
    body.innerText = p.body;
    user.innerHTML = `<b>Author:</b> ${u.name}<br><b>E-mail:</b><a href="mailto:${u.email}">${u.email}</a><br><b>Company:</b> ${u.company.name}`;
}





// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments
// https://jsonplaceholder.typicode.com/users

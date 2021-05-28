function createli() {
    let container = document.querySelector(`#list`);
    let text = document.querySelector(`#todoText`);
    if (text.value) {
        let li = document.createElement(`li`);

        li.innerHTML = `${text.value} <button class="delete" onclick="remove()">X</button>`;
        li.addEventListener(`click`, completeTask);
        container.append(li);

        text.value = "";
    } else {
        showError();
    }
}

function showError() {
    let text = document.querySelector(`#todoText`);
    text.classList.add('error');
    setTimeout(() => text.classList.remove('error'), 500);
}

function remove() {
    event.target.parentNode.remove();
}

function completeTask() {
    event.target.classList.toggle(`completed`)
}
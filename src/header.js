function createHeader() {
    const head = document.createElement('div');
    head.classList.add('head');

    const title = document.createElement('h1');
    title.classList.add('heading');
    title.textContent = 'To Do App';

    head.appendChild(title);

    return head;
}

export { createHeader };
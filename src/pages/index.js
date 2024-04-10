import { postsArray } from '../scripts/constants.js'

const container = document.getElementById('container');

postsArray.forEach((item, index) => {
    const element = document.createElement('li');
    element.classList.add('posts__item');

    const title = document.createElement('h2');
    title.classList.add('posts__title');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.classList.add('posts__text');
    text.textContent = item.text;

    element.appendChild(title);
    element.appendChild(text);

    container.appendChild(element);
});

const elements = document.querySelectorAll(".posts__item");

elements.forEach(el => {
    el.addEventListener('click', function () {
        el.classList.add('posts__item_clicked');
    });
})


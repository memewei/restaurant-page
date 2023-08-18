import background from './pika_restaurant.jpeg';
import './style.css';

function component(){
    const content = document.querySelector('#content');
    const element = document.createElement('div');

    element.innerHTML = "Welcome to Pika's Restaurant!";
    element.classList.add('header');

    const bg = new Image();
    bg.src = background;

    content.appendChild(element);
    element.appendChild(bg);

    return content;
}

document.body.appendChild(component());
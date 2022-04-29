import './hello-card.css';

class HelloCard {
  render(name){
    const card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `Hello i am ${name}!`
    const body = document.querySelector('body');
    body.appendChild(card);
  }
}

export default HelloCard;
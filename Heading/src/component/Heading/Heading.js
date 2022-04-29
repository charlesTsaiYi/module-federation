import './heading.css';

class Heading {
  render(){
    const div = document.createElement('div');
    div.innerHTML = '<h1>I am Heading</h1>'
    const body = document.querySelector('body');
    body.appendChild(div);
  }
}

export default Heading;
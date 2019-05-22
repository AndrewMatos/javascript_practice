import _ from 'loadsh';
import myName from './myName';


function component() {
  const element = document.createElement('div');

 
  element.innerHTML =  myName('Andrew');

  return element;
}

document.body.appendChild(component());


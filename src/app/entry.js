import {greeting} from './greeting';
import './../styles/style.scss';

var greetMessage = greeting("Idan");

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.app-title').innerHTML = greetMessage;
});
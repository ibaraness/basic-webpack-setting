import {greeting} from './greeting';

var greetMessage = greeting("Idan");

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.app-title').innerHTML = greetMessage;
});
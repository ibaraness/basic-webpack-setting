import {greeting} from './greeting';
import './../styles/style.scss';

var greetMessage = greeting("Idan");



document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('.app-title').innerHTML = greetMessage;
  
  /**
   * Lazy load new module on button click.
   * Import inside the code returns a promise.
   */
  document.querySelector('.lazy-loading-btn').addEventListener('click', function(){
    import('./box').then(function(module){
      module.createBox();
    })
  });

});
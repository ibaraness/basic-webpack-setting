import {greeting} from './greeting';
import $ from 'jquery';

import './../styles/style.scss';

var greetMessage = greeting("Idan");

$(function(){
  $('.app-title').text(greetMessage);
  
  /**
   * Lazy load new module on button click.
   * Import inside the code returns a promise.
   */
  $('.lazy-loading-btn').on('click', function(){
    import('./box').then(function(module){
      module.createBox();
      window.scrollTo(0,document.body.scrollHeight);
    })
  });
});
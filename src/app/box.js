import $ from 'jquery';

function returnBox(){
    var div = $('<div class="box"></div>').text("This is a box!")
    return div;
}

export function createBox(){
  var box = returnBox();
  $('body').append(box);
}

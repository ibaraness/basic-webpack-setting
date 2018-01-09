function returnBox(){
    var div = document.createElement('div');
    div.setAttribute('class','box');
    div.innerHTML = "This is a box!";
    return div;
}

export function createBox(){
  var box = returnBox();
  document.body.appendChild(box);  
}

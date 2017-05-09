function display(e){
var element = e.name
  var hiddingElement = document.getElementsByClassName('btn-display')

  //Hidding all elements
  for( var i = 0; i < hiddingElement.length; i++ ){
    hiddingElement[i].style.opacity = '0';
  }

  //Show selected element
  var screenPlay =  document.getElementsByName( element + '-content' )
  screenPlay[0].style.opacity = '1';
}

function cake(e){
  var element = e.name
  var hiddingElement = document.getElementsByClassName('btn-display')

  //Show selected element
  var screenPlay =  document.getElementsByName( element + '-content' )
  screenPlay[0].id= 'cake';
}

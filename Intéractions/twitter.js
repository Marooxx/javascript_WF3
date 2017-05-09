 var selecList=document.querySelector('textarea');
 var paragraph=document.querySelector('p');

function texteTwitter(){
    var resultat=140-selecList.value.length;
    paragraph.textContent= resultat;
    if (resultat<0) {
    paragraph.classList.add('.rouge')
    }
    else{
        paragraph.classList.remove('.rouge')

    }

}

textarea.addEventListener('keyup',texteTwitter);

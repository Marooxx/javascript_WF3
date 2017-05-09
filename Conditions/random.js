var computer;
var player;
var hasard=Math.random();

// choix du computer
if (hasard<1/3) {
    computer='feuille'
}
else if (hasard<2/3) {
    computer='pierre'
}
else{
    computer='ciseau'
}


//choix player
player=window.prompt('Faites votre choix?');
alert('le computer a choisi '+computer);
alert('vous avez choisi '+ player);

//étape vérification
if (player == computer){
    alert('égalité')
}
else if(player =='feuille'){
    // if(computer=='feuille'){
    //     alert('Egalité')
    // }
    if(computer=='ciseau'){
        alert('Vous avez perdu!')
    }
    if(computer=='pierre'){
        alert('Vous avez gagné!')
    }
}
else if(player =='ciseau'){
    if(computer=='feuille'){
        alert('Vous avez gagné!')
    }
    // if(computer=='ciseau'){
    //     alert('Egalité!')
    // }
    if(computer=='pierre'){
        alert('Vous avez perdu!')
    }
}
else if(player =='pierre'){
    if(computer=='feuille'){
        alert('Vous avez perdu!')
    }
    if(computer=='ciseau'){
        alert('Vous avez gagné!')
    }
    // if(computer=='pierre'){
    //     alert('Egalité!')
    // }
}

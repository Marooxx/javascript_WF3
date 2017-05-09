/* 
** Exemple : Aller sur http://flexboxfroggy.com/
** et poser un écouteur d'event click sur la grenouille
** Le console.log(this) vous montre bien que :
** this est l'élément sur lequel l'event a été détecté

** this ici est utile pour ne pas avoir à "reselectionner" l'élément qui vient d'être clické
*/

function maSuperFonction() {
   console.log(this);
}

// Je sélectionne l'elt qui a la classe .frog et je pose un écouteur d'event
document.querySelector('.frog').addEventListener('click', maSuperFonction);
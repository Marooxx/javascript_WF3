
//Masquer rectangle
var rectangle=document.querySelector('.rectangle');
var button=document.getElementById('button');

function masquer() {
    rectangle.classList.toggle('hide');
}
//changer de couleur
function colorRed(){
    rectangle.classList.add('important');
}
function colorBlue() {
    rectangle.classList.remove('important');

}
//Changement de couleur au doubleclick
function colorGreen() {
    rectangle.classList.toggle('good');

}

//Masquer
button.addEventListener('click',masquer);
//Ajouter/Retirer
rectangle.addEventListener('mouseenter',colorRed);
rectangle.addEventListener('mouseout',colorBlue);
//Doubleclick
rectangle.addEventListener('dblclick',colorGreen);
<script>
// CORRECTION
/************************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var button;
var rectangle;
// Recherche du bouton et du rectangle dans l'arbre DOM.
button    = document.getElementById('toggle-rectangle');
rectangle = document.querySelector('.rectangle');



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function onClickButton()
{
    // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    rectangle.classList.toggle('hide');
}

function onDoubleClickRectangle()
{
    // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    rectangle.classList.toggle('good');
}

function onMouseOutRectangle()
{
    // La méthode .remove() va supprimer la classes.
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

function onMouseOverRectangle()
{
    // La méthode .remove() va ajouter la classe.
    rectangle.classList.add('important');
}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// Installation d'un gestionnaire d'évènement clic sur le bouton.
button.addEventListener('click', onClickButton);

// Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);

// Installation d'un gestionnaire d'évènement double clic sur le rectangle.
rectangle.addEventListener('dblclick', onDoubleClickRectangle);

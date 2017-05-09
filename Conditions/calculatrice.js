var nombre1;

var nombre2;

var operation;
var resultat;



nombre1= parseFloat(window.prompt('Entrez un nombre '));


nombre2=parseFloat(window.prompt('Entrez un second chiffre'));


operation=window.prompt('Choisissez une opération(*,+,/,-)')
switch (operation) {
    case 'addition':
    case'+':
    resultat= nombre1 + nombre2;
    break;
    case 'soustraction ':
    case '-':
    resultat= nombre1 - nombre2;
    break;
    case 'multiplication':
    case'*':
    resultat= nombre1 * nombre2;
    break
    case'/':
    case'division':
    resultat= nombre1 / nombre2;
    break;
    default:
    alert('Veuillez ressaisir votre opération' );


}
alert('le résultat est '+ resultat);

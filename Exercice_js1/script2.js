var nombre1= prompt("Entrer un nombre");
var nombre2=prompt("Entrer un nombre");
 nombre1=parseInt(nombre1);
 nombre2=parseInt(nombre2);
var resultat= nombre1+nombre2;

document.write('le résultat est ' + resultat);
/*correction
var nb1;
var nb2;
var resultat;

nb1 = window.prompt('Entrez un  1er nombre');
nb2 = window.prompt('Entrez un  2eme nombre');

// On utilise parseInt() pour transformer la chaine de caractère en Integer, ce qui nous permet de faire une addition
nb1 = parseInt(nb1);
nb2 = parseInt(nb2);

resultat = nb1 + nb2;



document.write("Le résultat est " + resultat);
*/

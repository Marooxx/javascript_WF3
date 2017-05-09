/*## Enoncé

Afficher dynamiquement la date d'aujourd'hui en HTML sous la forme “Nous sommes le Mardi 11 Février 2014”.
UTILISER new Date() pour générer la date du jour
UTILISER getDay() getMonth() getFullYear()

## Ressources

* [Classe Date dans DevDocs.io](http://devdocs.io/javascript/global_objects/date)

## Remarques

* Il va falloir se servir de tableaux pour afficher les noms des jours de la semaine et des mois...
* Bien lire la documentation sur les différentes méthodes et en particulier les valeurs renvoyées*/
/* var date_du_jour= new Date();
var date_du_jour.getMonth()
var date_du_jour.getFullYear()
var date_du_jour.getDate()*/



var date_du_jour= new Date() ;
var jours=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
var mois=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Novembre','Décembre'];
var date=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var année=[2015,2016,2017];
document.write('Nous sommes le ' + jours[date_du_jour.getDay(1)]+date[ date_du_jour.getDate(18)] + mois[date_du_jour.getMonth(2)]+année[date_du_jour.getFullYear(2)]);

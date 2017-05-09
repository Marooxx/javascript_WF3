var ht;
const tauxTva = (20/100)
var ttc;


var ht=window.prompt("Inscrivez-votre montant hors taxe");
ht=parseFloat(ht);

var tva= ht*tauxTva;
var ttc=tva+ht;

 document.write('Le montant HT est de ' + ht + '€. Il y\'a' + tva +'€ de tva, le montant ttc est de' + ttc);
 //CORRECTION\\

/*// Je déclare toutes les variables dont on a besoin
const TAUX_TVA = 20;
var montant_ht;
var montant_tva;
var montant_ttc;


// 1 Je demande à l'utilisateur de saisir le montant Ht\\
montant_ht = window.prompt('Entrez un montant HT');


// 2 Je calcule montantTVA montantTTC\\
montant_ht = parseInt(montant_ht);
montant_tva = TAUX_TVA/100 * montant_ht;
montant_ttc = montant_ht + montant_tva;


// 3 J'affiche\\
document.write('<p>Pour un montant HT de ' + montant_ht + ' € il y a ' + montant_tva + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montant_ttc + ' €.</p>');

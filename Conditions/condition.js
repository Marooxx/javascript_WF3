/*## Enoncé

L'utilisateur saisit un montant HT et peut saisir s'il le souhaite une remise, le résultat TTC s'affiche en HTML.

## Remarques

* L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
* La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
* Au moment de l'affichage on doit connaître le pourcentage de remise, s'il y en a eu une, ou bien savoir le fait qu'aucune remise n'a été appliquée.
* Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.

<script>

const TAUX_TVA = 20.0;

// Déclaration des 5 variables dont on a besoin
var demandeRemise;
var montant_ht;
var montant_ttc;
var montant_tva;
var pourcentage_remise;

// On demande le montant HT à l'utilisateur
montant_ht = window.prompt('Quel est le montant HT ?');
montant_ht = parseFloat(montant_ht);

// Demande s'il y a une remise l'utilisateur.
demande_remise = window.prompt('Souhaitez-vous une remise ?');





.*/
const TAUX_TVA=0.2;
var montant_ht;
var remise;
var montant_ttc;
var montant_tva;
var pourcentage_remise;
montant_ht = window.prompt('Entrez un montant HT');
montant_ht = parseFloat(montant_ht);
remise= window.prompt('Voulez-vous une remise?');

if(remise =='oui'){

    pourcentage_remise =window.prompt('Entrez la remise!(en pourcent)');
    montant_ht = montant_ht-(montant_ht*pourcentage_remise/100);
    montant_tva=TAUX_TVA/100*montant_ht;
    montant_ttc=montant_ht+montant_tva;
    document.write(' vous devez payer '+ montant_ttc+" € avec une remise de "+ pourcentage_remise +"%" );
}

 else{

    montant_tva=TAUX_TVA/100*montant_ht;
    montant_ttc=montant_ht+montant_tva;
    document.write(' vous devez payer '+ montant_ttc+" € sans remise" );
 }
//
// montant_HT=parseFloat(montant_ht);
// montant_Tva=TAUX_TVA/100*montant_ht;
// montant_Ttc=montant_ht+montant_tva;
// remise=montant_ht-remise;

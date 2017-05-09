var nombre=parseFloat(window.prompt('Entrez un nombre'));
while (isNaN(nombre)){
    window.prompt('Entrer un chiffre svp!')
};

do{
    var nombre=parseFloat(window.prompt('Entrez un chiffre'));
}while(isNaN(nombre));
document.write('Exact, vous avez saisi un nombre')
/*## Enoncé

Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

## Remarques

* On peut saisir un nombre entier comme un nombre à virgule.

- Utiliser la boucle do while
- Utiliser la fonction isNaN() // renvoie true si on lui passe une chaîne de caractère en parametre

+ Définition : La boucle while permet d'executer du code TANT QU'UNE CONDIIO
+ SYNTAXE :

<script>

while(condition) {
	// code à executer
}

</script>

------------------

+ Définition : idem boucle while MAIS execute le code au moins une fois
+ SYNTAXE :

<script>

do {
	// code à executer

} while(condition)

</script>

var liste = document.getElementsByTagName('li');


function chgtCouleur (){
	//"this" permet de récupérer l'élément HTML qui vient d'être cliqué dans le'li'
	this.classList.toggle('selected')


	//on crée une variable pour stocker l information des éléments ayant la classe 'selected'
	var imageSelection = document.getElementsByClassName('selected');
	//on stocke les éléments dans le tableau dans une variable
	var nbrSelection = imageSelection.length;
	//le texte change des que la variable'nbrSelection' change au click
	document.querySelector('span').textContent=nbrSelection;

	//document.querySelector('span').textContent= document.getElementsByClassName('selected').length;

}


		for (var i =0;  i<liste.length; i++) {
		//la boucle va s'appliquer sur l'ensemble des éléments enrengistrés dans la var liste
		liste[i].addEventListener('click',chgtCouleur)

	}



/*/var images = document.getElementsByTagName('li');
function OnclickItem{
 this.addEventListener('click',chgtCouleur)
	//this vous permet de récupérer l'élément HTML qui vient d'être cliqué (le 'li')
}*/

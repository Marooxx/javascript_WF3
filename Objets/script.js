var voiture;
voiture = new Object()

var voiture= {
    marque:'fiat',
    fabrication:2015,
    dateAchat:new Date('2017-03-21'),
    passagersList:['Nicolas','Charlotte']
}

document.write("<h2>Un objet voiture</h2><br><h4>Informations sur la voiture:</h4><br> <ul><li> La marque de la voiture :"+ voiture.marque +"</li>"+ "<li> Date de fabrication : "+voiture.fabrication +"</li>"+ "<li> Le passager 1 est "+voiture.passagersList[0]+" et le  passager 2  est " +voiture.passagersList[1]+"</li>"+ "<li> Date d\'achat: "+voiture.dateAchat+"</li></ul>")


/*var age;


age = window.prompt('Quel est votre age ?');
if(age=(age>=18)){alert('vous avez 18 ans ou plus');
}
elseif(age>=100){
    alert('vous avez plus de 100 ans,félictations');
}
else{alert('vous êtes mineur');}*/

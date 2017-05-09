/*
*
**VARIABLES
*/
//var nom = $('#oblignom').val();//la variable va rechercher la valeur de l'id oblignom




/*
*
**FUNCTIONS et EVENTS
*
*/
$(".btnsubmit").on("click", function(){
    event.preventDefault();
    var nom = $("#oblignom").val();
    console.log(nom);
    var message = $('#msg');
    if (nom ===""){                     // === vérifie la valeur et type
        $("#oblignom").closest("div.form-group").addClass("has-error");    // closest = va chercher le 1er élément qu'il trouve comme querySelector
        // == vérifie la valeur
        message.addClass("error");
        var noName = $('.error');
        console.log(noName);
        var msgNoName ="Vous n'avez pas renseigné votre nom";
        console.log(msgNoName);
        noName[0].innerHTML=msgNoName;
    }

    var prenom = $('#obligprenom').val();
    var pays = $(".selection").val();
    var adresse = $('#obligadresse').val();
    var cp = $('#obligcp').val();
    var telephone = $('#obligphone').val();
    var ville = $('#obligville').val();


    if (nom !== "" && prenom !== "" && adresse !== "" && cp !== "" && telephone !== "" && ville == "" && pays !== "Pays") {
        console.log(pays);
        console.log('coucou');
        var formValid = $("form");
        formValid.addClass("valid");
        var msgValid ='Votre formulaire est valide';
        formValid[0].innerHTML=msgValid;

    }


});



/*
*
** EVENTS
*/

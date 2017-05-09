/*
*
*VARIABLES
*
*/

/*
*
*FUNCTIONS & EVENTS
*
*/
$(".btnsubmit").on("click", function() {
    event.preventDefault();
    var nom = $("#oblignom").val();
    // console.log(nom);
    var message = $("#msg");
    if (nom === "") {
        $("#oblignom").closest("div.form-group").addClass("has-error");
        message.addClass("error");
        var noName = $(".error");
        var msgNoName = "Vous n'avez pas renseigné votre nom";
        console.log(msgNoName);
        noName[0].innerHTML = msgNoName;
    }
    var prenom = $("#obligprenom").val();
    var adresse = $("#obligadresse").val();
    var cp = $("#obligcp").val();
    var telephone = $("#telephone").val();
    var pays = $(".selection").val();

    if (nom !== "" && prenom !== "" && adresse !== "" && cp !== "" && telephone !== "" && pays !== "Pays") {
        console.log(pays);
        var formValid = $("form");
        formValid.addClass("valid");
        var msgFormValid = "Super !";
        formValid[0].innerHTML = msgFormValid;
    }





});

import { Component } from '@angular/core';
import {contactFormcomponent} from './contactForm.component';

@Component({
  selector: 'app-root',
  template:


      `
      <add-contact></add-contact>
      <div class= "pagee-header">
      Vous avez {{nbContact}} contacts dans la liste
      </div>
      <div class="col-lg-6 col-md-12">
       <div (click) = showDetail(contact) class="contact" *ngFor = 'let contact of contacts'>
       <!--pour détecter l'event ,<button>(click)=fonction()</button>-->
       <button (click) = deleteContact(contact) class="btn btn-danger">X</button><img src="{{contact.image}}"> <span >{{contact.firstname}}</span>
       </div>
       </div>

       <div  *ngIf ="details"  class='detail col-lg-6'>
       <h3> Détails</h3>
       <a (click) = hideDetails() href="#">Masquer les détails</a>

       <p>Prénom : {{details.firstname}}</p>
       <p>Adresse : {{details.adress}} </p>
       <p> Code postale :{{details.cp}} </p>
       <p> Ville : {{details.city}}
       <p> Portable : {{details.phone}} </p>

       </div>
      `,
  styles: [`img {
              width:48px;
              height:48px;
              margin-left:13px;
          }
          .contact{
              margin-top:5px;
              margin-bottom:5px;
              border-bottom:1px solid #ccc;
              background:#f7f8f9;
              width:30%;
                    }
        .detail{
            background-color:#f7f0f9;
            border:1px solid #ccc;
            border-radius:4px;
            color:black;
        }
        `]
})
export class AppComponent {
  contacts=[

  {firstname:"Juliette", phone:"0638245798",
    adress:'37 rue de Paris',cp :93300,
    city:'Pierrefitte', pro: true, image:"https://randomuser.me/api/portraits/women/6.jpg" },

    {firstname:'Karine', phone:'0617274723',
      adress:'8 rue de la liberté',cp :93300,
      city:'Pierrefitte', pro : true,
  image:"https://randomuser.me/api/portraits/women/82.jpg"},

      {firstname:'Julie', phone:"0638245798",
        adress:'9 rue de la Promenade',cp :92310,
        city:'Levallois-Perret', pro :true,
    image:"https://randomuser.me/api/portraits/women/68.jpg" },
  ]
//this = component cela signifie que l'on indique qu'une var fait partie de this
nbContact = this.contacts.length;
details;

deleteContact = function(contact){
    let index = this.contacts.indexOf(contact);
    let validateDelete=window.confirm('Voulez vous vraiment supprimer ce contact?');

    if ( validateDelete == true){
    this.contacts.splice(index,1);
    }
    if(contact == this.details){this.details = null;}
    this.nbContact = this.contacts.length;


}
    showDetail = function(contact){
        this.details =contact;



    }

    hideDetails = function(){
        this.details = null
    }

};
